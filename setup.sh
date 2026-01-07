#!/bin/bash

echo "🚀 Setting up Laravel + Inertia.js + React project..."

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
fi

# Start Docker containers
echo "🐳 Starting Docker containers..."
docker-compose up -d --build

# Wait for containers to be ready
echo "⏳ Waiting for containers to be ready..."
sleep 10

# Install PHP dependencies
echo "📦 Installing PHP dependencies..."
docker-compose exec -T app composer install

# Generate application key
echo "🔑 Generating application key..."
docker-compose exec -T app php artisan key:generate

# Install Node dependencies
echo "📦 Installing Node dependencies..."
docker-compose exec -T node npm install

# Set permissions
echo "🔐 Setting permissions..."
docker-compose exec -T app chown -R www:www /var/www/html/storage
docker-compose exec -T app chown -R www:www /var/www/html/bootstrap/cache

echo "✅ Setup completed!"
echo ""
echo "🌐 Application will be available at: http://localhost:8080"
echo ""
echo "To start the frontend dev server, run:"
echo "  docker-compose exec node npm run dev"
