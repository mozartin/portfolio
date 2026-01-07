# PowerShell script for setting up the project

Write-Host "🚀 Setting up Laravel + Inertia.js + React project..." -ForegroundColor Green

# Create .env file if it doesn't exist
if (-not (Test-Path .env)) {
    Write-Host "📝 Creating .env file..." -ForegroundColor Yellow
    Copy-Item .env.example .env
}

# Start Docker containers
Write-Host "🐳 Starting Docker containers..." -ForegroundColor Yellow
docker-compose up -d --build

# Wait for containers to be ready
Write-Host "⏳ Waiting for containers to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Install PHP dependencies
Write-Host "📦 Installing PHP dependencies..." -ForegroundColor Yellow
docker-compose exec -T app composer install

# Generate application key
Write-Host "🔑 Generating application key..." -ForegroundColor Yellow
docker-compose exec -T app php artisan key:generate

# Install Node dependencies
Write-Host "📦 Installing Node dependencies..." -ForegroundColor Yellow
docker-compose exec -T node npm install

# Set permissions
Write-Host "🔐 Setting permissions..." -ForegroundColor Yellow
docker-compose exec -T app chown -R www:www /var/www/html/storage
docker-compose exec -T app chown -R www:www /var/www/html/bootstrap/cache

Write-Host ""
Write-Host "✅ Setup completed!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Application will be available at: http://localhost:8080" -ForegroundColor Cyan
Write-Host ""
Write-Host "To start the frontend dev server, run:" -ForegroundColor Yellow
Write-Host "  docker-compose exec node npm run dev" -ForegroundColor White
