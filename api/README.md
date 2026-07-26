# Revin licensing backend (Vercel serverless)

Turns a Lemon Squeezy purchase into a machine-bound, **offline** Revin license that the Revit
add-in verifies locally with the RSA public key baked into `License.cs`.

## Endpoints

| Route | Purpose |
|---|---|
| `POST /api/activate` | **Core.** Exchanges an LS license key for a signed 30-day offline license bound to the machine. Called by the add-in on activation and to refresh (~weekly). |
| `POST /api/lemonsqueezy-webhook` | Optional. Verifies the LS HMAC signature and logs subscription events (hook for future real-time revocation). |

### `/api/activate`
Request: `{ "licenseKey": "<LS key>", "machineGuid": "<hw guid>", "instanceId": "<optional, from a prior activation>" }`
Response: `{ "license": "<signed JSON string>", "instanceId": "...", "expires": "<ISO>" }`
The add-in stores `license` (validated offline by `License.cs`) and `instanceId` (sent on refresh so LS seats aren't re-consumed).

## Environment variables (set in Vercel → Project → Settings → Environment Variables)

| Name | Value | Used by |
|---|---|---|
| `REVIN_LICENSE_PRIVATE_KEY` | The **PKCS#8 PEM** private key (paste the full `-----BEGIN PRIVATE KEY----- … -----END PRIVATE KEY-----`). Generated locally from `private_key.xml` → `revin-license-private.pem` (kept OUT of git). | `/api/activate` signing |
| `LEMONSQUEEZY_WEBHOOK_SECRET` | The signing secret you set when creating the LS webhook. | `/api/lemonsqueezy-webhook` |

> The LS license `activate`/`validate` endpoints authenticate with the license key itself, so **no LS store API key is required** for `/api/activate`.

## Lemon Squeezy setup

1. Create the two products (Revin **Pro** subscription, Revin **Founder** one-time) and paste their checkout URLs into `src/config/links.js`.
2. On each product, enable **License keys** (LS then auto-generates and **emails** a key to the buyer — no email service needed on our side). Set an activation limit (e.g. 3 machines) to cap sharing.
3. (Optional) Create a webhook → `https://<your-domain>/api/lemonsqueezy-webhook`, subscribe to `subscription_*` events, and put its secret in `LEMONSQUEEZY_WEBHOOK_SECRET`.

## Security notes
- The private key lives ONLY in the Vercel env var — never in git (`.gitignore` blocks `*.pem`, `*.key`, `private_key*.xml`).
- The offline license is machine-bound (`machineGuid`) and expires in 30 days; the add-in refreshes online while the subscription is active. Cancel in LS → next refresh fails → lapses to Free.
