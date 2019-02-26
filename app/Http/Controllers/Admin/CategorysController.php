<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Transformers\CategoryTransformer;

class CategorysController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * CategorysController constructor.
     */
    public function __construct()
    {
        $this->model = new Category();
        $this->transformer = new CategoryTransformer();
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
            'name'      => 'required|string',
            'weight'    => 'required|numeric',
            'parent_id' => 'required|numeric',
            'is_index'  => 'required|boolean',
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
            'name'      => '分类名称',
            'weight'    => '排序权重',
            'parent_id' => '父级分类',
            'is_index'  => '首页推荐',
        ];
    }

    protected function gate(Category $category)
    {
        if ($category->childers()->exists()) {
            throw new \Exception('此分类下还有子分类，无法删除');
        }
    }

    public function parents()
    {
        return $this->response->collection(Category::query()->where('parent_id', 0)->get(), $this->transformer);
    }

    public function all()
    {
        return $this->response->array(['categorys' => Category::query()->where('parent_id', 0)->with('childers')->get()]);
    }
}
