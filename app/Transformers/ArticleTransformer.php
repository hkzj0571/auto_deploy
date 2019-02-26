<?php

namespace App\Transformers;

use App\Models\Article;
use League\Fractal\TransformerAbstract;

class ArticleTransformer extends TransformerAbstract
{
    /**
     * Transform a Article.
     *
     * @param  \App\Models\Article article
     *
     * @return array
     */
    public function transform(Article $article)
    {
        return [
            'id'         => (int) $article->id,
            'title'      => (string) $article->title,
            'cover'      => (string) $article->cover,
            'describe'   => (string) $article->describe,
            'content'    => (string) $article->content,
            'weight'     => (int) $article->weight,
            'created_at' => (string) $article->created_at,
        ];
    }
}
