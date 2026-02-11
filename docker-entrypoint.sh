#!/bin/bash
set -e

echo "🔧 Starting entrypoint script..."

# Fix PHP-FPM listen address
sed -i 's/listen = 127.0.0.1:9000/listen = 0.0.0.0:9000/g' /usr/local/etc/php-fpm.d/www.conf

# Railway uses PORT environment variable
PORT="${PORT:-80}"
echo "🌐 Configuring nginx to listen on port $PORT"

# Remove all existing nginx configs to avoid conflicts
rm -f /etc/nginx/sites-enabled/*
rm -f /etc/nginx/conf.d/*

# Write fresh nginx config directly to conf.d
cat > /etc/nginx/conf.d/app.conf << NGINX_EOF
server {
    listen 0.0.0.0:${PORT};
    server_name _;
    root /var/www/html/public;
    index index.php index.html;

    charset utf-8;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php\$ {
        try_files \$uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)\$;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        fastcgi_param PATH_INFO \$fastcgi_path_info;
        fastcgi_read_timeout 300;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
NGINX_EOF

# Test nginx config
echo "🔍 Testing nginx config..."
nginx -t 2>&1 || echo "❌ Nginx config test FAILED!"

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
