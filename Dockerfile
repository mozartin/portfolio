FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libzip-dev \
    libonig-dev \
    nginx \
    supervisor \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js for frontend build
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Create user
RUN groupadd -g 1000 www && \
    useradd -u 1000 -ms /bin/bash -g www www

# Copy application
COPY --chown=www:www . /var/www/html

# Configure Nginx
RUN rm -f /etc/nginx/sites-enabled/default
COPY docker/nginx/default.conf /etc/nginx/sites-available/laravel
RUN ln -sf /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/

# Configure PHP-FPM
RUN sed -i 's/listen = .*/listen = 127.0.0.1:9000/' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/;clear_env = no/clear_env = no/' /usr/local/etc/php-fpm.d/www.conf

# Create startup script
RUN echo '#!/bin/bash\n\
set -e\n\
\n\
# Set permissions\n\
chown -R www:www /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true\n\
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true\n\
\n\
# Install/update dependencies as www user\n\
su -s /bin/bash www -c "cd /var/www/html && composer install --no-dev --optimize-autoloader --no-interaction --no-scripts 2>&1 || echo Composer install skipped"\n\
\n\
# Build frontend\n\
su -s /bin/bash www -c "cd /var/www/html && npm ci 2>&1 || echo npm ci skipped"\n\
su -s /bin/bash www -c "cd /var/www/html && npm run build 2>&1 || echo npm build skipped"\n\
\n\
# Laravel cache\n\
if [ -f /var/www/html/.env ]; then\n\
    su -s /bin/bash www -c "cd /var/www/html && php artisan config:cache 2>&1 || true"\n\
    su -s /bin/bash www -c "cd /var/www/html && php artisan route:cache 2>&1 || true"\n\
    su -s /bin/bash www -c "cd /var/www/html && php artisan view:cache 2>&1 || true"\n\
fi\n\
\n\
# Supervisor config\n\
cat > /etc/supervisor/conf.d/supervisord.conf << EOF\n\
[supervisord]\n\
nodaemon=true\n\
user=root\n\
\n\
[program:nginx]\n\
command=/usr/sbin/nginx -g "daemon off;"\n\
autostart=true\n\
autorestart=true\n\
stdout_logfile=/dev/stdout\n\
stdout_logfile_maxbytes=0\n\
stderr_logfile=/dev/stderr\n\
stderr_logfile_maxbytes=0\n\
\n\
[program:php-fpm]\n\
command=/usr/local/sbin/php-fpm -F\n\
autostart=true\n\
autorestart=true\n\
stdout_logfile=/dev/stdout\n\
stdout_logfile_maxbytes=0\n\
stderr_logfile=/dev/stderr\n\
stderr_logfile_maxbytes=0\n\
EOF\n\
\n\
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf' > /usr/local/bin/start.sh && \
    chmod +x /usr/local/bin/start.sh

# Set initial permissions
RUN chown -R www:www /var/www/html 2>/dev/null || true

EXPOSE 80

CMD ["/usr/local/bin/start.sh"]
