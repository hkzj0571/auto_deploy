<?php

namespace App\Http\Middleware;

use Auth;
use Illuminate\Http\Request;
use Route;
use Closure;

class Daily
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
        if (Auth::check()) {
            \App\Models\Daily::create([
                'data'     => $request->all(),
                'action'   => $request->getMethod(),
                'path'     => $request->path(),
                'admin_id' => Auth::user()->id,
            ]);
        }
        return $next($request);
    }
}
