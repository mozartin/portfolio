# Coolify + DNS cutover runbook

Use this after the Coolify-ready Docker image is on GitHub.

## A. Coolify app (same Hetzner as poprockavenue)

1. Open Coolify → same server/project as **poprockavenue**.
2. **+ New** → **Public Repository** / Dockerfile → `https://github.com/mozartin/portfolio.git`.
3. Build pack: **Dockerfile** (root `Dockerfile`).
4. Ports: expose **8080** (HTTP). Do **not** bind host 80/443 on the app — Coolify Traefik terminates TLS.
5. Domains: `beliavska.com` (and `www.beliavska.com` if needed).
6. Persistent storages:
   - Source: Coolify volume → Destination: `/var/www/html/database`
   - Source: Coolify volume → Destination: `/var/www/html/storage`
7. Environment (production):

```env
APP_NAME="Olena Beliavska"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://beliavska.com
APP_KEY=base64:...   # php artisan key:generate --show locally
DB_CONNECTION=sqlite
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database
MAIL_MAILER=smtp
MAIL_HOST=smtp.resend.com
MAIL_PORT=587
MAIL_USERNAME=resend
MAIL_PASSWORD=<RESEND_API_KEY>
MAIL_FROM_ADDRESS=hello@beliavska.com
MAIL_FROM_NAME="Olena Beliavska"
```

8. Deploy → open the Coolify-generated preview URL first (before DNS cutover).
9. Smoke test: home, about, services, showcase, contact form.

## B. DNS cutover (Railway → Hetzner)

1. Find Hetzner IP: same A record as `poprockavenue.nl` (`dig +short poprockavenue.nl A`).
2. Lower TTL on `beliavska.com` (e.g. 300s) a day ahead if possible.
3. Update DNS:
   - `beliavska.com` → A → Hetzner IP
   - `www.beliavska.com` → A or CNAME as preferred
4. Wait for propagation; confirm `dig +short beliavska.com A` matches Hetzner.
5. Visit `https://beliavska.com` — certificate should be issued by Coolify.
6. Send a test contact form message; confirm Resend delivery.
7. Leave Railway running ~24h for rollback, then remove the Railway service.

## C. Rollback

- Point DNS A record back to Railway.
- Coolify app can stay stopped; SQLite volumes retain data.
