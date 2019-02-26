<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ty_banner extends Model
{
    protected $connection = 'ty_sql';
    protected $table = 'banner';
    protected $guarded = [];
}
