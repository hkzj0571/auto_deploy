<?php

namespace App\Transformers;

use App\Models\Jingse;
use League\Fractal\TransformerAbstract;

class JingseTransformer extends TransformerAbstract
{
    /**
     * Transform a Article.
     *
     * @param  \App\Models\Article article
     *
     * @return array
     */
    public function transform(Jingse $jingse)
    {
        return [
            'id'         => (int) $jingse->id,
            'title'      => (string) $jingse->title,
            'cover'      => (string) $jingse->cover,
            'describe'   => (string) $jingse->describe,
            'weight'     => (int) $jingse->weight,
            'created_at' => (string) $jingse->created_at,
        ];
    }
}
