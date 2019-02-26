<?php

namespace App\Http\Controllers\Admin;

use Auth;
use Illuminate\Auth\Events\Login;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Auth\LoginRequest;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $token = Auth::attempt($request->only('mobile', 'password'));

        if (!$token) return $this->response->errorBadRequest('密码错误，请重试');

        if (Auth::user()->is_disabled) return $this->response->errorBadRequest('此用户已被禁用');

        event(new Login(Auth::getDefaultDriver(), Auth::user(), false));

        return $this->response->array([
            'token'      => 'Bearer ' . $token,
            'expires_in' => Auth::factory()->getTTL(),
        ]);
    }
}
