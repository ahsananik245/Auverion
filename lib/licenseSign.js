import crypto from 'crypto';

// Produce a Revin offline license that the .NET add-in's License.cs verifies. It rebuilds the
// unsigned payload BYTE-FOR-BYTE the way License.ValidateSignedLicense reconstructs it (fixed key
// order, no whitespace, machineGuid only when present) and RSA-SHA256 (PKCS#1 v1.5) signs it, hex
// upper-cased. The signing key is the PEM in REVIN_LICENSE_PRIVATE_KEY (paired with the public key
// embedded in License.cs). Returns the license object; store JSON.stringify(...) as the add-in key.
export function signLicense({ key, expires, machineGuid }) {
  const pem = (process.env.REVIN_LICENSE_PRIVATE_KEY || '').replace(/\\n/g, '\n').trim();
  if (!pem) throw new Error('REVIN_LICENSE_PRIVATE_KEY is not set');

  const parts = [`"key":"${key}"`, `"expires":"${expires}"`];
  if (machineGuid) parts.push(`"machineGuid":"${machineGuid}"`);
  const unsigned = '{' + parts.join(',') + '}';

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(Buffer.from(unsigned, 'utf8'));
  const signature = signer.sign(pem).toString('hex').toUpperCase();

  const license = { key, expires };
  if (machineGuid) license.machineGuid = machineGuid;
  license.signature = signature;
  return license;
}
