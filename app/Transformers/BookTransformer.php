<?php

namespace App\Transformers;

use App\Models\Book;
use League\Fractal\TransformerAbstract;

class BookTransformer extends TransformerAbstract
{
    /**
     * Transform a Book.
     *
     * @param  \App\Models\Book book
     *
     * @return array
     */
    public function transform(Book $book)
    {
        return [
            'id'         => (int) $book->id,
            'name'       => (string) $book->name,
            'link'       => (string) $book->link,
            'created_at' => (string) $book->created_at,
        ];
    }
}
