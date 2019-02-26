<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class AuthAdmin
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
        return Auth::guard('admin')->check() ? $next($request) : abort(401);
    }
}
