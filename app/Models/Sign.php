<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sign extends Model
{
    protected $guarded = [];

    protected $casts = [
        'data' => 'array',
    ];

    public function signable()
    {
        return $this->morphTo();
    }
}
