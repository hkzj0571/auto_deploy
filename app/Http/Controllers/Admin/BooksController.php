<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Http\Controllers\Controller;
use App\Transformers\BookTransformer;
use App\Http\Controllers\Traits\Resource;

class BooksController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * BooksController constructor.
     */
    public function __construct()
    {
        $this->model = new Book();
        $this->transformer = new BookTransformer();
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
            'name' => '名称',
            'link' => '文件',
        ];
    }

    protected function gate()
    {

    }
}
