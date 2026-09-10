# Portfolio — Olena Beliavska

Laravel 10 + Inertia.js + React + Tailwind CSS.

- **Local:** Laravel Herd (`http://portfolio.test`)
- **Production:** Coolify on Hetzner (same pattern as poprockavenue) — single Docker image, SQLite, HTTPS via Coolify Traefik

## Local setup (Herd)

```bash
cp .env.example .env
# APP_URL=http://portfolio.test and DB_CONNECTION=sqlite are already set

touch database/database.sqlite
composer install --ignore-platform-req=php   # Herd may be on PHP 8.4; lockfile targets 8.2/8.3
php artisan key:generate
php artisan migrate
npm install
npm run dev
```

Open **http://portfolio.test**. Keep `npm run dev` running for Vite HMR.

Optional: isolate PHP 8.3 for this site in Herd (`herd isolate 8.3`) so you can drop `--ignore-platform-req=php`.

## Production Docker (Coolify)

The image is a multi-stage build (Node assets → Composer → PHP-FPM + nginx on **8080**), matching poprockavenue.

### Coolify checklist

1. Push this repo to GitHub (`mozartin/portfolio`).
2. In Coolify (same Hetzner server as poprockavenue): **New Resource → Dockerfile**.
3. Port: **8080**.
4. Environment variables:

| Variable | Value |
|----------|--------|
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `APP_URL` | `https://beliavska.com` |
| `APP_KEY` | output of `php artisan key:generate --show` |
| `DB_CONNECTION` | `sqlite` |
| `MAIL_MAILER` | `smtp` |
| `MAIL_HOST` | `smtp.resend.com` |
| `MAIL_PORT` | `587` |
| `MAIL_USERNAME` | `resend` |
| `MAIL_PASSWORD` | Resend API key |
| `MAIL_FROM_ADDRESS` | `hello@beliavska.com` |
| `MAIL_FROM_NAME` | `Olena Beliavska` |

5. Persistent volumes:
   - `/var/www/html/database`
   - `/var/www/html/storage`
6. Domain: `beliavska.com` (+ optional `www` redirect). Coolify issues Let’s Encrypt.
7. Deploy, then verify `/` and the contact form.

### Local image smoke test (optional)

```bash
docker build -t portfolio .
docker run --rm -p 8080:8080 \
  -e APP_KEY=base64:$(php -r 'echo base64_encode(random_bytes(32));') \
  -e APP_ENV=production \
  -e APP_URL=http://localhost:8080 \
  -e DB_CONNECTION=sqlite \
  -v portfolio_db:/var/www/html/database \
  -v portfolio_storage:/var/www/html/storage \
  portfolio
```

## DNS cutover (Railway → Hetzner)

1. Lower TTL on `beliavska.com` ahead of time.
2. Note the Hetzner server IP used by `poprockavenue.nl`.
3. Point `beliavska.com` (and `www`) A/AAAA records to that IP.
4. Confirm HTTPS, site, and contact email on Coolify.
5. Keep Railway briefly as rollback, then delete the Railway service.
6. Resend SPF/DKIM are usually independent of the A record — confirm they still pass.

## Stack

- Laravel 10, Inertia.js, React 18, Tailwind CSS, Vite
- SQLite (sessions / cache / queue tables)
- Contact form → Resend API

## Useful commands

```bash
php artisan migrate
php artisan cache:clear
php artisan config:clear
npm run dev
npm run build
```
