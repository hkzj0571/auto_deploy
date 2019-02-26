<?php

namespace App\Transformers;

use App\Models\Daily;
use League\Fractal\TransformerAbstract;

class DailyTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'admin',
    ];

    /**
     * Transform a Daily.
     *
     * @param  \App\Models\Daily daily
     *
     * @return array
     */
    public function transform(Daily $daily)
    {
        return [
            'id'         => (int) $daily->id,
            'data'       => (array) $daily->data,
            'path'       => (string) $daily->path,
            'action'     => (string) $daily->action,
            'admin_id'   => (int) $daily->admin_id,
            'created_at' => (string) $daily->created_at,
        ];
    }

    public function includeAdmin(Daily $daily)
    {
        return $daily->admin ? $this->item($daily->admin, new AdminTransformer()) : $this->null();
    }
}
