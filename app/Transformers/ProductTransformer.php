<?php

namespace App\Transformers;

use App\Models\Product;
use League\Fractal\TransformerAbstract;

class ProductTransformer extends TransformerAbstract
{
    /**
     * Transform a Product.
     *
     * @param  \App\Models\Product product
     *
     * @return array
     */
    public function transform(Product $product)
    {
        return [
            'id'                 => (int) $product->id,
            'cover'              => (string) $product->cover,
            'name'               => (string) $product->name,
            'pricing'            => int($product->pricing),
            'weight'             => (int) $product->weight,
            'current'            => [$product->first_category_id, $product->second_category_id],
            'first_category_id'  => (int) $product->first_category_id,
            'second_category_id' => (int) $product->second_category_id,
            'describe'           => (string) $product->describe,
            'tb_link'            => (string) $product->tb_link,
            'jd_link'            => (string) $product->jd_link,
            'tm_link'            => (string) $product->tm_link,
            'content'            => (string) $product->content,
            'created_at'         => (string) $product->created_at,
        ];
    }
}
