<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Daily extends Model
{
    protected $guarded = [];

    protected $casts = [
        'data' => 'array'
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}
