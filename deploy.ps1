# PowerShell script for deploying project to production

Write-Host "🚀 Deploying Laravel + Inertia.js + React project to production..." -ForegroundColor Green

# Check if .env file exists
if (-not (Test-Path .env)) {
    Write-Host "❌ Error: .env file not found!" -ForegroundColor Red
    Write-Host "Create .env file based on .env.example and configure it for production" -ForegroundColor Yellow
    exit 1
}

# Check APP_ENV
$envContent = Get-Content .env -Raw
if ($envContent -match "APP_ENV=local") {
    Write-Host "⚠️  Warning: APP_ENV is set to 'local'. Make sure APP_ENV=production is set for production" -ForegroundColor Yellow
}

# Build frontend
Write-Host "📦 Building frontend..." -ForegroundColor Yellow
docker run --rm -v "${PWD}:/var/www/html" -w /var/www/html node:20-alpine sh -c "npm ci && npm run build"

# Stop old containers
Write-Host "🛑 Stopping old containers..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml down

# Build and start containers
Write-Host "🐳 Building and starting containers..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml up -d --build

# Wait for containers to be ready
Write-Host "⏳ Waiting for containers to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Install PHP dependencies (without dev dependencies)
Write-Host "📦 Installing PHP dependencies..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml exec -T app composer install --no-dev --optimize-autoloader

# Clear cache
Write-Host "🧹 Clearing cache..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml exec -T app php artisan config:cache
docker-compose -f docker-compose.prod.yml exec -T app php artisan route:cache
docker-compose -f docker-compose.prod.yml exec -T app php artisan view:cache

# Set permissions
Write-Host "🔐 Setting permissions..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml exec -T app chown -R www:www /var/www/html/storage
docker-compose -f docker-compose.prod.yml exec -T app chown -R www:www /var/www/html/bootstrap/cache

# Migrations (uncomment if needed)
# Write-Host "🗄️  Running migrations..." -ForegroundColor Yellow
# docker-compose -f docker-compose.prod.yml exec -T app php artisan migrate --force

Write-Host ""
Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Application is available at: http://localhost" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  Don't forget to:" -ForegroundColor Yellow
Write-Host "  1. Configure SSL certificates for HTTPS" -ForegroundColor White
Write-Host "  2. Set proper database passwords in .env" -ForegroundColor White
Write-Host "  3. Configure APP_URL in .env" -ForegroundColor White
Write-Host "  4. Run migrations if needed" -ForegroundColor White
