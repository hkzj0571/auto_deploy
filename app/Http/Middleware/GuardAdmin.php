<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class GuardAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Auth::setDefaultDriver('admin');
        return $next($request);
    }
}
