<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Sign;
use App\Http\Controllers\Controller;
use App\Transformers\SignTransformer;

class SignsController extends Controller
{
    use Resource;

    public function __construct()
    {
        $this->model = new Sign();
        $this->transformer = new SignTransformer();
    }

    protected function filters(): array
    {
        return [
            'id'            => self::FILTER_EQUAL,
            'signable_id'   => self::FILTER_EQUAL,
            'signable_type' => self::FILTER_EQUAL,
            'created_at'    => self::FILTER_BETWEEN,
        ];
    }

    public function gate()
    {

    }
}
