<?php

namespace App\Transformers;

use App\Models\Config;
use League\Fractal\TransformerAbstract;

class ConfigTransformer extends TransformerAbstract
{
    /**
     * Transform a Config.
     *
     * @param  \App\Models\Config config
     *
     * @return array
     */
    public function transform(Config $config)
    {
        return [
            'id'         => (int) $config->id,
            'name'       => (string) $config->name,
            'alias'      => (string) $config->alias,
            'value'      => $config->value,
            'describe'   => (string) $config->describe,
            'created_at' => (string) $config->created_at,
            'updated_at' => (string) $config->updated_at,
        ];
    }
}
