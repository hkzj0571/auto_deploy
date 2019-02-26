<?php

namespace App\Transformers;

use App\Models\Category;
use League\Fractal\TransformerAbstract;

class CategoryTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'parent',
    ];

    /**
     * Transform a Category.
     *
     * @param  \App\Models\Category category
     *
     * @return array
     */
    public function transform(Category $category)
    {
        return [
            'id'         => (int) $category->id,
            'name'       => (string) $category->name,
            'parent_id'  => (int) $category->parent_id,
            'weight'     => (int) $category->weight,
            'is_index'   => (boolean) $category->is_index,
            'created_at' => (string) $category->created_at,
        ];
    }

    public function includeParent(Category $category)
    {
        return $category->parent ? $this->item($category->parent, new self()) : $this->null();
    }
}
