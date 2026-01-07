# Laravel + Inertia.js + React + Tailwind CSS

Проект на базе Laravel с использованием Inertia.js, React и Tailwind CSS, развернутый в Docker.

## Технологии

- **Laravel 10** - PHP фреймворк
- **Inertia.js** - Мост между Laravel и React
- **React 18** - JavaScript библиотека для UI
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Docker** - Контейнеризация приложения
- **Vite** - Сборщик фронтенда

## Требования

- Docker и Docker Compose
- Git

## Установка и запуск

### 1. Клонируйте репозиторий (если нужно)

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Создайте файл .env

```bash
cp .env.example .env
```

### 3. Запустите Docker контейнеры

```bash
docker-compose up -d --build
```

### 4. Установите зависимости PHP

```bash
docker-compose exec app composer install
```

### 5. Сгенерируйте ключ приложения

```bash
docker-compose exec app php artisan key:generate
```

### 6. Установите зависимости Node.js

```bash
docker-compose exec node npm install
```

### 7. Запустите сборку фронтенда (в отдельном терминале)

```bash
docker-compose exec node npm run dev
```

Или для production сборки:

```bash
docker-compose exec node npm run build
```

### 8. Выполните миграции (если есть)

```bash
docker-compose exec app php artisan migrate
```

## Доступ к приложению

После запуска всех контейнеров приложение будет доступно по адресу:

**http://localhost:8080**

## Структура проекта

```
.
├── app/                    # Laravel приложение
│   └── Http/
│       └── Controllers/   # Контроллеры
├── resources/
│   ├── js/
│   │   ├── Pages/         # React страницы (Inertia)
│   │   ├── Layouts/       # React layouts
│   │   └── app.jsx        # Точка входа React
│   └── css/
│       └── app.css        # Tailwind CSS
├── routes/
│   └── web.php            # Web маршруты
├── docker/                # Docker конфигурация
├── docker-compose.yml     # Docker Compose конфигурация
└── Dockerfile             # Docker образ для PHP
```

## Полезные команды

### Docker команды

```bash
# Запуск контейнеров
docker-compose up -d

# Остановка контейнеров
docker-compose down

# Просмотр логов
docker-compose logs -f

# Выполнение команд в контейнере
docker-compose exec app php artisan <command>
docker-compose exec node npm <command>
```

### Laravel команды

```bash
# Выполнение artisan команд
docker-compose exec app php artisan <command>

# Создание контроллера
docker-compose exec app php artisan make:controller <Name>Controller

# Создание миграции
docker-compose exec app php artisan make:migration <name>
```

### Node команды

```bash
# Разработка (watch mode)
docker-compose exec node npm run dev

# Production сборка
docker-compose exec node npm run build
```

## Создание новых страниц

1. Создайте React компонент в `resources/js/Pages/`
2. Создайте контроллер в `app/Http/Controllers/`
3. Добавьте маршрут в `routes/web.php`
4. Верните Inertia::render() в контроллере

Пример:

```php
// routes/web.php
Route::get('/about', [AboutController::class, 'index']);

// app/Http/Controllers/AboutController.php
public function index()
{
    return Inertia::render('About');
}

// resources/js/Pages/About.jsx
export default function About() {
    return <div>About Page</div>;
}
```

## База данных

База данных MySQL доступна на:
- **Host:** localhost
- **Port:** 3307 (изменен из-за конфликта с локальным MySQL)
- **Database:** laravel
- **Username:** root
- **Password:** root

Redis доступен на:
- **Host:** localhost
- **Port:** 6380 (изменен из-за конфликта с локальным Redis)

## Решение проблем

### Проблемы с правами доступа

```bash
docker-compose exec app chown -R www:www /var/www/html/storage
docker-compose exec app chown -R www:www /var/www/html/bootstrap/cache
```

### Очистка кеша

```bash
docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan view:clear
```

## Деплой в Production

### Подготовка к деплою

1. **Настройте .env файл для production:**
   ```bash
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://yourdomain.com
   
   DB_DATABASE=your_database
   DB_PASSWORD=strong_password
   DB_ROOT_PASSWORD=strong_root_password
   ```

2. **Запустите скрипт деплоя:**

   **Linux/Mac:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

   **Windows (PowerShell):**
   ```powershell
   .\deploy.ps1
   ```

   **Или вручную:**
   ```bash
   # Сборка фронтенда
   docker run --rm -v "$(pwd):/var/www/html" -w /var/www/html node:20-alpine sh -c "npm ci && npm run build"
   
   # Запуск production контейнеров
   docker-compose -f docker-compose.prod.yml up -d --build
   
   # Установка зависимостей (без dev)
   docker-compose -f docker-compose.prod.yml exec -T app composer install --no-dev --optimize-autoloader
   
   # Очистка и кеширование
   docker-compose -f docker-compose.prod.yml exec -T app php artisan config:cache
   docker-compose -f docker-compose.prod.yml exec -T app php artisan route:cache
   docker-compose -f docker-compose.prod.yml exec -T app php artisan view:cache
   
   # Миграции
   docker-compose -f docker-compose.prod.yml exec -T app php artisan migrate --force
   ```

### Важные моменты для production:

- ✅ Убедитесь, что `APP_ENV=production` и `APP_DEBUG=false`
- ✅ Используйте сильные пароли для базы данных
- ✅ Настройте SSL сертификаты для HTTPS
- ✅ Настройте правильный `APP_URL` в .env
- ✅ Закройте порты БД и Redis (они уже закрыты в docker-compose.prod.yml)
- ✅ Настройте бэкапы базы данных
- ✅ Настройте мониторинг и логирование

### Отличия production конфигурации:

- ❌ Нет Node контейнера (фронтенд собирается заранее)
- ❌ Нет открытых портов для БД и Redis
- ❌ Используются production переменные окружения
- ✅ Кеширование конфигурации, маршрутов и представлений
- ✅ Оптимизированный автозагрузчик Composer

## Дополнительная информация

- [Документация Laravel](https://laravel.com/docs)
- [Документация Inertia.js](https://inertiajs.com)
- [Документация React](https://react.dev)
- [Документация Tailwind CSS](https://tailwindcss.com)

