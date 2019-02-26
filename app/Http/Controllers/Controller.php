<?php

namespace App\Http\Controllers;

use Dingo\Api\Routing\Helpers;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Helpers;

    // filters const variable
    const FILTER_BOOLEAN = 0; // 布尔值筛选
    const FILTER_LIKE    = 1; // 模糊查询
    const FILTER_EQUAL   = 2; // 相等筛选
    const FILTER_BETWEEN = 3; // 区间筛选

    // Rule const variable
    const RULE_STORE  = 0;
    const RULE_UPDATE = 1;
}
