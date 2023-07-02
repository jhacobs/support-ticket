<?php

namespace App\Http\Middleware\SecureHeaders;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReferrerPolicy
{
    public function handle(Request $request, Closure $next): Response
    {
        /** @var Response $response */
        $response = $next($request);

        $response->headers->set(
            key: 'Referrer-Policy',
            values: 'strict-origin-when-cross-origin'
        );

        return $response;
    }
}
