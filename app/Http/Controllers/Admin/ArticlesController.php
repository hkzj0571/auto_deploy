<?php

namespace App\Http\Controllers\Admin;

use App\Models\Article;
use App\Http\Controllers\Controller;
use App\Transformers\ArticleTransformer;
use App\Http\Controllers\Traits\Resource;

class ArticlesController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * ArticlesController constructor.
     */
    public function __construct()
    {
        $this->model = new Article();
        $this->transformer = new ArticleTransformer();
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
            'title'      => self::FILTER_LIKE,
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
            'cover'    => 'required|url',
            'title'    => 'required|string',
            'describe' => 'required|string',
            'content'  => 'required|string',
            'weight'   => 'required|numeric',
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
            'cover'    => '展示封面',
            'title'    => '文章标题',
            'describe' => '简单描述',
            'content'  => '详情内容',
            'weight'   => '排序权重',
        ];
    }

    protected function gate()
    {

    }
}
