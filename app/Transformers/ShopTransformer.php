<?php

namespace App\Transformers;

use App\Models\Shop;
use League\Fractal\TransformerAbstract;

class ShopTransformer extends TransformerAbstract
{
    /**
     * Transform a Shop.
     *
     * @param  \App\Models\Shop shop
     *
     * @return array
     */
    public function transform(Shop $shop)
    {
        return [
            'id'         => (int) $shop->id,
            'name'       => (string) $shop->name,
            'url'        => (string) $shop->url,
            'link'       => (string) $shop->link,
            'created_at' => (string) $shop->created_at,
        ];
    }
}
