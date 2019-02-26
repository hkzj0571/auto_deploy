<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $guarded = [];

    // 打开方式
    const TARGET_CURENT = 0; // 当前页面打开
    const TARGET_NEW    = 1; // 在新页面打开
}
