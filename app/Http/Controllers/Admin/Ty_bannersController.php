<?php

namespace App\Http\Controllers\Admin;

use App\Models\Ty_banner;
use App\Http\Controllers\Controller;
use App\Transformers\Ty_bannerTransformer;

class Ty_bannersController extends Controller
{
    /**
     * Initial constructor
     *
     * Ty_bannersController constructor.
     */
    public function __construct()
    {
        $this->model = new Ty_banner();
        $this->transformer = new Ty_bannerTransformer();
    }

    /**
     * Filters
     *
     * @return array
     */
    protected function filters(): array
    {
        return [
            'id'         => self::FILTER_EQUAL,
            'name'       => self::FILTER_LIKE,
            'weight'     => self::FILTER_EQUAL,
            'created_at' => self::FILTER_BETWEEN,
        ];
    }

    /**
     * Form validation criteria
     *
     * @param int $rule
     * @return array
     */
    protected function rules($rule = self::RULE_STORE):array
    {
        return [
            'name'   => 'required|string',
            'url'    => 'required|url',
            'weight' => 'required|numeric',
            'goods_id' => 'required|numeric',
        ];
    }

    /**
     * Custom attribute
     *
     * @return array
     */
    protected function attributes():array
    {
        return [
            'name'   => '广告名称',
            'url'    => '展示图片',
            'weight' => '排序权重',
        ];
    }
}
