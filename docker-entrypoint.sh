#!/bin/bash
set -e

echo "Starting entrypoint script..."

# Create storage directories if they don't exist
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/bootstrap/cache

# Fix permissions
chown -R www:www /var/www/html/storage
chown -R www:www /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage
chmod -R 775 /var/www/html/bootstrap/cache

# Verify that public/index.php exists
if [ ! -f /var/www/html/public/index.php ]; then
    echo "ERROR: /var/www/html/public/index.php does not exist!"
    exit 1
fi

# Verify that vendor directory exists
if [ ! -d /var/www/html/vendor ]; then
    echo "ERROR: /var/www/html/vendor directory does not exist!"
    exit 1
fi

echo "Entrypoint checks passed. Starting services..."

# Execute the main command (supervisord)
exec "$@"

