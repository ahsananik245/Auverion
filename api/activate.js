import { signLicense } from '../lib/licenseSign.js';

// Exchange a Lemon Squeezy license key for a machine-bound, offline Revin license.
//
// Flow (this is the core monetization endpoint):
//   1. Revin add-in sends { licenseKey, machineGuid, instanceId? }.
//   2. We ask Lemon Squeezy (real-time) whether the key is valid + active:
//        - first activation (no instanceId): POST /v1/licenses/activate  -> binds a machine
//          "instance" and enforces the product's activation (seat) limit; returns instance.id.
//        - refresh (instanceId present):     POST /v1/licenses/validate  -> checks the key +
//          instance are still active WITHOUT consuming another seat.
//   3. If active, we RSA-sign a 30-day offline license bound to machineGuid and return it.
//      The add-in caches it and validates OFFLINE from then on, re-calling here ~weekly to
//      refresh the 30-day window. A cancelled/expired subscription fails step 2 -> no refresh
//      -> the offline license lapses at day 30 -> the add-in falls back to Free. Lifetime
//      (one-time) keys never expire in LS, so they refresh forever = effectively perpetual.
//
// LS license endpoints authenticate with the license key itself, so no store API key is needed.

const LS = 'https://api.lemonsqueezy.com/v1/licenses';
const OFFLINE_DAYS = 30;

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = [];
  for await (const c of req) chunks.push(c);
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); }
  catch { return {}; }
}

async function lsPost(path, params) {
  const r = await fetch(`${LS}/${path}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(params),
  });
  return r.json();
}

export default async function handler(req, res) {
  // The caller is a desktop add-in; permissive CORS is fine and simplifies testing.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { licenseKey, machineGuid, instanceId } = await readJson(req);
  if (!licenseKey || !machineGuid)
    return res.status(400).json({ error: 'licenseKey and machineGuid are required' });

  try {
    let active = false, instId = instanceId, status, meta;

    if (instanceId) {
      const j = await lsPost('validate', { license_key: licenseKey, instance_id: instanceId });
      status = j?.license_key?.status;
      meta = j?.meta;
      active = !!j.valid && status === 'active';
    } else {
      const j = await lsPost('activate', { license_key: licenseKey, instance_name: machineGuid });
      status = j?.license_key?.status;
      instId = j?.instance?.id;
      meta = j?.meta;
      active = !!j.activated && status === 'active';
      if (!active && j?.error) return res.status(403).json({ error: j.error, status });
    }

    if (!active) return res.status(403).json({ error: 'License not active', status });

    // Only activate keys for a Revin product. Without this, ANY Lemon Squeezy key from the store
    // (e.g. a RebarX key) would unlock Revin Pro. Set REVIN_LS_VARIANTS to a comma-separated list
    // of the Revin Pro/Founder variant IDs (from the LS dashboard). If unset, this check is skipped
    // (fine for a single-product store, but set it before you sell anything else on the same store).
    const allowed = (process.env.REVIN_LS_VARIANTS || '').split(',').map((s) => s.trim()).filter(Boolean);
    if (allowed.length) {
      const variant = String(meta?.variant_id ?? '');
      if (!allowed.includes(variant))
        return res.status(403).json({ error: 'This license key is not for Revin' });
    }

    const expires = new Date(Date.now() + OFFLINE_DAYS * 86400000).toISOString();
    const license = signLicense({ key: licenseKey, expires, machineGuid });
    return res.status(200).json({ license: JSON.stringify(license), instanceId: instId, expires });
  } catch (e) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}
