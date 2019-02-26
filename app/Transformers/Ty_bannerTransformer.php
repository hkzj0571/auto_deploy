<?php

namespace App\Transformers;

use App\Models\Ty_banner;
use League\Fractal\TransformerAbstract;

class Ty_bannerTransformer extends TransformerAbstract
{
    /**
     * Transform a Ty_banner.
     *
     * @param  \App\Models\Ty_banner ty_banner
     *
     * @return array
     */
    public function transform(Ty_banner $ty_banner)
    {
        return [
            'id'         => (int) $ty_banner->id,
            'name'       => (string) $ty_banner->name,
            'url'        => (string) $ty_banner->url,
            'weight'     => (int) $ty_banner->weight,
            'goods_id'     => (int) $ty_banner->goods_id,
            'created_at' => (string) $ty_banner->created_at,
        ];
    }
}
