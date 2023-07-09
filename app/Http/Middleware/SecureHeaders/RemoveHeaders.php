<?php

namespace App\Http\Middleware\SecureHeaders;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RemoveHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $headers = [
            'Server',
            'X-Powered-By',
        ];

        /** @var Response $response */
        $response = $next($request);

        foreach ($headers as $header) {
            header_remove($header);

            $response->headers->remove(
                key: $header,
            );
        }

        return $response;
    }
}
