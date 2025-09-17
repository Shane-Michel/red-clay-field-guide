<?php

declare(strict_types=1);

namespace App\Bootstrap;

use Dotenv\Dotenv;

final class Kernel
{
    private string $rootPath;

    public function __construct(?string $rootPath = null)
    {
        $this->rootPath = $rootPath ?? dirname(__DIR__, 2) . DIRECTORY_SEPARATOR;
    }

    public function handle(): void
    {
        $this->bootstrapEnv();

        http_response_code(200);
        header('Content-Type: application/json');

        echo json_encode([
            'status' => 'ok',
            'message' => 'Red Clay Field Guide API is ready.',
            'environment' => $_ENV['APP_ENV'] ?? 'production'
        ], JSON_PRETTY_PRINT) ?: '{}';
    }

    private function bootstrapEnv(): void
    {
        if (is_file($this->rootPath . '.env')) {
            Dotenv::createImmutable($this->rootPath)->safeLoad();
        } elseif (is_file($this->rootPath . '.env.example')) {
            Dotenv::createImmutable($this->rootPath, ['.env.example'])->safeLoad();
        }
    }
}
