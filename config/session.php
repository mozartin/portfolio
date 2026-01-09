<?php

// Always use file driver by default to avoid DB connection errors
// If you need database sessions, ensure DB is accessible and set SESSION_DRIVER=database explicitly
$sessionDriver = env('SESSION_DRIVER', 'file');

// Safety check: if DB_HOST is not accessible, force file driver
if ($sessionDriver === 'database') {
    $dbHost = env('DB_HOST');
    // If DB_HOST contains 'railway.internal' and might not be accessible, use file
    if (empty($dbHost) || strpos($dbHost, 'railway.internal') !== false) {
        // For Railway, if using internal hostname, prefer file sessions unless DB is confirmed working
        $sessionDriver = 'file';
    }
}

return [
    'driver' => $sessionDriver,
    'lifetime' => env('SESSION_LIFETIME', 120),
    'expire_on_close' => false,
    'encrypt' => env('SESSION_ENCRYPT', false),
    'files' => storage_path('framework/sessions'),
    'connection' => env('SESSION_CONNECTION'),
    'table' => 'sessions',
    'store' => env('SESSION_STORE'),
    'lottery' => [2, 100],
    'cookie' => env('SESSION_COOKIE', 'laravel_session'),
    'path' => env('SESSION_PATH', '/'),
    'domain' => env('SESSION_DOMAIN'),
    'secure' => env('SESSION_SECURE_COOKIE'),
    'http_only' => true,
    'same_site' => 'lax',
];

