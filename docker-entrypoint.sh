#!/bin/bash
set -e

echo "🔧 Starting entrypoint script..."

# Fix PHP-FPM listen address
sed -i 's/listen = 127.0.0.1:9000/listen = 0.0.0.0:9000/g' /usr/local/etc/php-fpm.d/www.conf

# Create storage directories
mkdir -p /var/www/html/storage/framework/{sessions,views,cache}
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/bootstrap/cache

# Permissions
chown -R www:www /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Laravel setup
cd /var/www/html
php artisan config:cache || true
php artisan route:cache || true

exec "$@"
