<?php

namespace App\Transformers;

use App\Models\Admin;
use League\Fractal\TransformerAbstract;

class AdminTransformer extends TransformerAbstract
{
    /**
     * Transform a Admin.
     *
     * @param  \App\Models\Admin admin
     *
     * @return array
     */
    public function transform(Admin $admin)
    {
        return [
            'id'          => (int) $admin->id,
            'avatar'      => (string) $admin->avatar,
            'name'        => (string) $admin->name,
            'mobile'      => (string) $admin->mobile,
            'is_disabled' => (boolean) $admin->is_disabled,
            'created_at'  => (string) $admin->created_at,
            'updated_at'  => (string) $admin->updated_at,
        ];
    }
}
