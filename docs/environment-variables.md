# Environment Variables Reference

A structural map of variable ownership across Vercel environments. All updates to variables must be applied in the Vercel Dashboard prior to generating a new build.

| Variable Name | Purpose | Scope | Secret? |
| ------------- | ------- | ----- | ------- |
| `NEXT_PUBLIC_APP_URL` | Core frontend URL resolution | Prod/Prev/Dev | No |
| `NEXT_PUBLIC_SITE_NAME`| Platform Title String | Prod/Prev/Dev | No |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Default i18n tag (`en`) | Prod/Prev/Dev | No |
| `WHMCS_API_URL` | External billing integration address | Prod/Prev/Dev | Yes |
| `WHMCS_API_IDENTIFIER`| Base WHMCS API Access Key | Prod/Prev | Yes |
| `WHMCS_API_SECRET` | Admin WHMCS API Auth Token | Prod/Prev | Yes |

⚠️ **SECURITY WARNING:**
Never commit `.env.local` or `.env.production` to GitHub. Always run `vercel env pull .env.local` locally to synchronize updated secrets from the active deployment servers securely.
