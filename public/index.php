<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Enable error reporting for debugging (remove in production if needed)
ini_set('display_errors', '0');
error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

try {
    $app = require_once __DIR__.'/../bootstrap/app.php';

    $kernel = $app->make(Kernel::class);

    $response = $kernel->handle(
        $request = Request::capture()
    )->send();

    $kernel->terminate($request, $response);
} catch (\Throwable $e) {
    // Log error to file
    $logFile = __DIR__.'/../storage/logs/laravel.log';
    $errorMsg = date('Y-m-d H:i:s') . ' - Laravel Error: ' . $e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine() . PHP_EOL;
    $errorMsg .= 'Stack trace: ' . $e->getTraceAsString() . PHP_EOL . PHP_EOL;
    @file_put_contents($logFile, $errorMsg, FILE_APPEND);
    
    // Also log to PHP error log
    error_log('Laravel Error: ' . $e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine());
    
    // Return 500 error with more details
    http_response_code(500);
    header('Content-Type: text/html; charset=utf-8');
    
    // Show error details if APP_DEBUG is true or if we're in development
    $showDetails = (isset($_ENV['APP_DEBUG']) && $_ENV['APP_DEBUG'] === 'true') || 
                   (isset($_ENV['APP_ENV']) && $_ENV['APP_ENV'] !== 'production');
    
    if ($showDetails) {
        echo '<!DOCTYPE html><html><head><title>500 Error</title></head><body style="font-family: monospace; padding: 20px;">';
        echo '<h1>500 Internal Server Error</h1>';
        echo '<h2>Error Details:</h2>';
        echo '<p><strong>Message:</strong> ' . htmlspecialchars($e->getMessage()) . '</p>';
        echo '<p><strong>File:</strong> ' . htmlspecialchars($e->getFile()) . '</p>';
        echo '<p><strong>Line:</strong> ' . htmlspecialchars($e->getLine()) . '</p>';
        echo '<h3>Stack Trace:</h3>';
        echo '<pre style="background: #f5f5f5; padding: 10px; overflow-x: auto;">' . htmlspecialchars($e->getTraceAsString()) . '</pre>';
        echo '<p><small>Error logged to: ' . htmlspecialchars($logFile) . '</small></p>';
        echo '</body></html>';
    } else {
        echo '500 Internal Server Error. Check logs for details.';
    }
    exit(1);
}
