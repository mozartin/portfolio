#!/bin/bash
# Don't exit on error for artisan commands
set +e

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

# Check if APP_KEY is set (required for Laravel)
if [ -z "$APP_KEY" ] && [ ! -f /var/www/html/.env ]; then
    echo "⚠️  WARNING: APP_KEY environment variable is not set!"
    echo "⚠️  Laravel may not work properly without APP_KEY"
fi

# Clear Laravel cache to ensure fresh start (skip cache:clear if using database cache)
# Only clear config, route, and view cache - these don't require DB connection
if [ -f /var/www/html/.env ] || [ ! -z "$APP_KEY" ]; then
    echo "🧹 Clearing Laravel cache..."
    cd /var/www/html
    # Clear config cache (doesn't require DB)
    php artisan config:clear 2>&1 || echo "Config clear failed (may be expected)"
    # Clear route cache (doesn't require DB)
    php artisan route:clear 2>&1 || echo "Route clear failed (may be expected)"
    # Clear view cache (doesn't require DB)
    php artisan view:clear 2>&1 || echo "View clear failed (may be expected)"
    # Skip cache:clear if CACHE_STORE is database (requires DB connection)
    if [ "$CACHE_STORE" != "database" ]; then
        php artisan cache:clear 2>&1 || echo "Cache clear failed (may be expected)"
    else
        echo "⏭️  Skipping cache:clear (CACHE_STORE=database requires DB connection)"
    fi
else
    echo "⚠️  .env file not found and APP_KEY not set - skipping cache clear"
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
