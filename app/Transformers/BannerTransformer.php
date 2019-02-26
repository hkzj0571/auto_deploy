<?php

namespace App\Transformers;

use App\Models\Banner;
use League\Fractal\TransformerAbstract;

class BannerTransformer extends TransformerAbstract
{
    /**
     * Transform a Banner.
     *
     * @param  \App\Models\Banner banner
     *
     * @return array
     */
    public function transform(Banner $banner)
    {
        return [
            'id'         => (int) $banner->id,
            'name'       => (string) $banner->name,
            'url'        => (string) $banner->url,
            'link'       => (string) $banner->link,
            'weight'     => (int) $banner->weight,
            'target'     => (int) $banner->target,
            'created_at' => (string) $banner->created_at,
        ];
    }
}
