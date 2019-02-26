<?php

namespace App\Http\Requests\Admin\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mobile'   => 'required|exists:admins',
            'password' => 'required|string|min:6',
        ];
    }

    public function attributes()
    {
        return [
            'mobile'   => '手机号码',
            'password' => '登录密码',
        ];
    }
}
