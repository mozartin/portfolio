#!/bin/sh
# Start PHP-FPM for local development

# Configure PHP-FPM to listen on all interfaces
sed -i 's/listen = 127.0.0.1:9000/listen = 0.0.0.0:9000/g' /usr/local/etc/php-fpm.d/www.conf || true

# Cache Laravel config and routes for better performance
cd /var/www/html
php artisan config:cache || true
php artisan route:cache || true

# Start PHP-FPM
exec /usr/local/sbin/php-fpm
