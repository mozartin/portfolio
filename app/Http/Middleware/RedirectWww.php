<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RedirectWww
{
    public function handle(Request $request, Closure $next)
    {
        $host = $request->getHost();

        if ($host === 'www.beliavska.com') {
            $target = $request->getScheme().'://beliavska.com'.$request->getRequestUri();

            return redirect()->to($target, 301);
        }

        return $next($request);
    }
}

