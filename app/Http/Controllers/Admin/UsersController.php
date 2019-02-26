<?php

namespace App\Http\Controllers\Admin;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Transformers\AdminTransformer;

class UsersController extends Controller
{
    public function profile()
    {
        return $this->response->item(
            Auth::user(),
            new AdminTransformer()
        );
    }
}
