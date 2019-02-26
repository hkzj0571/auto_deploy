<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    protected $guarded = [];

    public static function _config($name, $default = null, $is_full = false)
    {
        $config = self::where('name', $name)->first();

        if ($config && $is_full) {
            return $config;
        }

        return $config ? $config->value : $default;
    }
}
