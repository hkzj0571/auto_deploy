<?php

namespace App\Transformers;

use App\Models\Admin;
use App\Models\Sign;
use League\Fractal\TransformerAbstract;

class SignTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'signable',
    ];

    /**
     * Transform a Sign.
     *
     * @param  \App\Models\Sign sign
     *
     * @return array
     */
    public function transform(Sign $sign)
    {
        return [
            'id'            => (int) $sign->id,
            'signable_id'   => (int) $sign->signable_id,
            'signable_type' => (string) $sign->signable_type,
            'data'          => (array) $sign->data,
            'created_at'    => (string) $sign->created_at,
        ];
    }

    public function includeSignable(Sign $sign)
    {
        if (!$sign->signable) {
            return $this->null();
        }

        switch ($sign->signable_type) {
            case get_class(new Admin()):
                return $this->item($sign->signable, new AdminTransformer());
            default:
                return $this->null();
        }
    }
}
