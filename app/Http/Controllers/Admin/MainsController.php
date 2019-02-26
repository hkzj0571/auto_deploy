<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Page;
use App\Http\Controllers\Controller;
use App\Transformers\PageTransformer;

class MainsController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * PagesController constructor.
     */
    public function __construct()
    {
        $this->model = new Page();
        $this->transformer = new PageTransformer();
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
            'title'      => self::FILTER_LIKE,
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
            'title'    => 'required|string',
            'content'  => 'required|string',
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
            'title'    => '文章标题',
            'content'  => '详情内容',
        ];
    }

    protected function gate()
    {
        throw new \Exception('页面不能删除');
    }
}
