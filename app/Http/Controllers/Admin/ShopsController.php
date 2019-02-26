<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Shop;
use App\Http\Controllers\Controller;
use App\Transformers\ShopTransformer;

class ShopsController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * ShopsController constructor.
     */
    public function __construct()
    {
        $this->model = new Shop();
        $this->transformer = new ShopTransformer();
    }

    /**
     * Filters
     *
     * @return array
     */
    protected function filters()
    : array
    {
        return [
            'id'         => self::FILTER_EQUAL,
            'name'       => self::FILTER_LIKE,
            'created_at' => self::FILTER_BETWEEN,
        ];
    }

    /**
     * Form validation criteria
     *
     * @param int $rule
     *
     * @return array
     */
    protected function rules($rule = self::RULE_STORE)
    : array
    {
        return [
            'name' => 'required|string',
            'url'  => 'required|url',
            'link' => 'required|url',
        ];
    }

    /**
     * Custom attribute
     *
     * @return array
     */
    protected function attributes()
    : array
    {
        return [
            'name' => '店铺名称',
            'url'  => '店铺图片',
            'link' => '店铺链接',
        ];
    }

    protected function gate()
    {

    }
}
