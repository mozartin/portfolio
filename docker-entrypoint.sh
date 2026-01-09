#!/bin/bash
set -e

echo "🔧 Starting entrypoint script..."

# Create storage directories if they don't exist
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/bootstrap/cache

# Fix permissions - run as root to change ownership
chown -R www:www /var/www/html/storage
chown -R www:www /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage
chmod -R 775 /var/www/html/bootstrap/cache
chmod -R 755 /var/www/html/public

# Clear Laravel cache to ensure fresh start (if .env exists)
if [ -f /var/www/html/.env ]; then
    echo "🧹 Clearing Laravel cache..."
    cd /var/www/html && php artisan config:clear || true
    php artisan cache:clear || true
    php artisan route:clear || true
    php artisan view:clear || true
else
    echo "⚠️  .env file not found - skipping cache clear"
fi

# Verify critical files exist
if [ ! -f /var/www/html/public/index.php ]; then
    echo "❌ ERROR: /var/www/html/public/index.php does not exist!"
    exit 1
fi

if [ ! -d /var/www/html/vendor ]; then
    echo "❌ ERROR: /var/www/html/vendor directory does not exist!"
    exit 1
fi

echo "✅ Entrypoint checks passed. Starting services..."

# Execute the main command (supervisord)
exec "$@"
