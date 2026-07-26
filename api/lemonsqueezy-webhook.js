import crypto from 'crypto';

// Lemon Squeezy webhook receiver (OPTIONAL for launch). /api/activate already checks LS in
// real time, so a cancelled subscription stops refreshing on its own — the webhook is here for
// logging now and real-time revocation later (e.g. persist cancelled keys to a store that
// /api/activate consults). We verify the HMAC-SHA256 signature so only genuine LS calls are
// accepted. Raw body is required for the signature, so the default body parser is disabled.
export const config = { api: { bodyParser: false } };

async function readRaw(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';
  const raw = await readRaw(req);
  const sent = String(req.headers['x-signature'] || '');
  const digest = crypto.createHmac('sha256', secret).update(raw).digest('hex');

  const ok = secret && sent &&
    sent.length === digest.length &&
    crypto.timingSafeEqual(Buffer.from(sent), Buffer.from(digest));
  if (!ok) return res.status(401).json({ error: 'invalid signature' });

  let evt;
  try { evt = JSON.parse(raw.toString('utf8')); } catch { return res.status(400).json({ error: 'bad json' }); }

  const name = evt?.meta?.event_name;
  const status = evt?.data?.attributes?.status;
  // Launch: log. Future: on subscription_cancelled / subscription_expired, mark the key revoked
  // in a KV/DB so /api/activate refuses to refresh it before its 30-day window is up.
  console.log('LS webhook:', name, 'status=', status);

  return res.status(200).json({ received: true });
}
