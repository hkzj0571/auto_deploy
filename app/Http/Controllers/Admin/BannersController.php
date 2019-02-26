<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Banner;
use App\Http\Controllers\Controller;
use App\Transformers\BannerTransformer;

class BannersController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * BannersController constructor.
     */
    public function __construct()
    {
        $this->model = new Banner();
        $this->transformer = new BannerTransformer();
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
            'target'     => self::FILTER_EQUAL,
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
            'name'   => 'required|string',
            'url'    => 'required|url',
            'link'   => 'nullable|url',
            'weight' => 'required|numeric',
            'target' => 'required|numeric|in:0,1',
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
            'name'   => '广告名称',
            'url'    => '展示图片',
            'link'   => '跳转链接',
            'weight' => '排序权重',
            'target' => '打开方式',
        ];
    }

    protected function gate()
    {

    }
}
