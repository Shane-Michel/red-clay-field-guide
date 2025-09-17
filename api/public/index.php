<?php

declare(strict_types=1);

use App\Bootstrap\Kernel;

$autoload = __DIR__ . '/../vendor/autoload.php';

if (!file_exists($autoload)) {
    http_response_code(500);
    header('Content-Type: application/json');

    echo json_encode([
        'status' => 'error',
        'message' => 'Composer dependencies are not installed. Run "composer install" inside the api directory.'
    ], JSON_PRETTY_PRINT) ?: '{}';

    exit(1);
}

require $autoload;

$kernel = new Kernel();
$kernel->handle();
