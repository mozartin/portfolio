#!/bin/bash

echo "🚀 Deploying Laravel + Inertia.js + React project to production..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Create .env file based on .env.example and configure it for production"
    exit 1
fi

# Check APP_ENV
if grep -q "APP_ENV=local" .env; then
    echo "⚠️  Warning: APP_ENV is set to 'local'. Make sure APP_ENV=production is set for production"
fi

# Build frontend
echo "📦 Building frontend..."
docker run --rm -v "$(pwd):/var/www/html" -w /var/www/html node:20-alpine sh -c "npm ci && npm run build"

# Stop old containers
echo "🛑 Stopping old containers..."
docker-compose -f docker-compose.prod.yml down

# Build and start containers
echo "🐳 Building and starting containers..."
docker-compose -f docker-compose.prod.yml up -d --build

# Wait for containers to be ready
echo "⏳ Waiting for containers to be ready..."
sleep 10

# Install PHP dependencies (without dev dependencies)
echo "📦 Installing PHP dependencies..."
docker-compose -f docker-compose.prod.yml exec -T app composer install --no-dev --optimize-autoloader

# Clear cache
echo "🧹 Clearing cache..."
docker-compose -f docker-compose.prod.yml exec -T app php artisan config:cache
docker-compose -f docker-compose.prod.yml exec -T app php artisan route:cache
docker-compose -f docker-compose.prod.yml exec -T app php artisan view:cache

# Set permissions
echo "🔐 Setting permissions..."
docker-compose -f docker-compose.prod.yml exec -T app chown -R www:www /var/www/html/storage
docker-compose -f docker-compose.prod.yml exec -T app chown -R www:www /var/www/html/bootstrap/cache

# Migrations (uncomment if needed)
# echo "🗄️  Running migrations..."
# docker-compose -f docker-compose.prod.yml exec -T app php artisan migrate --force

echo ""
echo "✅ Deployment completed!"
echo ""
echo "🌐 Application is available at: http://localhost"
echo ""
echo "⚠️  Don't forget to:"
echo "  1. Configure SSL certificates for HTTPS"
echo "  2. Set proper database passwords in .env"
echo "  3. Configure APP_URL in .env"
echo "  4. Run migrations if needed"
