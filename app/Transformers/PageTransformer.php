<?php

namespace App\Transformers;

use App\Models\Page;
use League\Fractal\TransformerAbstract;

class PageTransformer extends TransformerAbstract
{
    /**
     * Transform a Page.
     *
     * @param  \App\Models\Page page
     *
     * @return array
     */
    public function transform(Page $page)
    {
        return [
            'id'         => (int) $page->id,
            'title'      => (string) $page->title,
            'content'    => (string) $page->content,
            'created_at' => (string) $page->created_at,
        ];
    }
}
