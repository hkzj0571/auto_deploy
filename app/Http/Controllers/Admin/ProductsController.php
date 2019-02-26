<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Transformers\ProductTransformer;

class ProductsController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * ProductsController constructor.
     */
    public function __construct()
    {
        $this->model = new Product();
        $this->transformer = new ProductTransformer();
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
            'cover'              => 'required|url',
            'name'               => 'required|string',
            'describe'           => 'required|string',
            'content'            => 'required|string',
            'weight'             => 'required|numeric',
            'pricing'            => 'required|numeric',
            'first_category_id'  => 'required|exists:categories,id',
            'second_category_id' => 'required|exists:categories,id',
            'tb_link'            => 'required|url',
            'tm_link'            => 'required|url',
            'jd_link'            => 'required|url',
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
            'cover'              => '展示封面',
            'name'               => '产品名称',
            'describe'           => '简单描述',
            'content'            => '详情内容',
            'weight'             => '排序权重',
            'pricing'            => '产品价格',
            'first_category_id'  => '一级分类',
            'second_category_id' => '二级分类',
            'tb_link'            => '淘宝链接',
            'tm_link'            => '天猫链接',
            'jd_link'            => '京东链接',
        ];
    }

    protected function gate()
    {

    }
}
