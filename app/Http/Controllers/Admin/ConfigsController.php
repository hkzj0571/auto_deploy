<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Config;
use App\Http\Controllers\Controller;
use App\Transformers\ConfigTransformer;
use Illuminate\Validation\Rule;

class ConfigsController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * ConfigsController constructor.
     */
    public function __construct()
    {
        $this->model = new Config();
        $this->transformer = new ConfigTransformer();
    }

    /**
     * Filters
     *
     * @return array
     */
    protected function filters(): array
    {
        return [
            'id'         => self::FILTER_EQUAL,
            'name'       => self::FILTER_LIKE,
            'alias'      => self::FILTER_LIKE,
            'created_at' => self::FILTER_BETWEEN,
        ];
    }

    /**
     * Form validation criteria
     *
     * @param int $rule
     * @return array
     */
    protected function rules($rule = self::RULE_STORE): array
    {
        $rules = [
            'alias'    => 'required|string',
            'value'    => 'required',
            'describe' => 'nullable',
        ];

        switch ($rule) {
            case self::RULE_STORE:
                return array_merge($rules, [
                    'name'     => 'required|string|unique:configs',
                ]);
            case self::RULE_UPDATE:
                return array_merge($rules, [
                    'name'   => [
                        'required', Rule::unique(
                            $this->model->getTable()
                        )->ignore(
                            request()->route(
                                $this->key ?: strtolower(class_basename($this->model))
                            )
                        ),
                    ],
                ]);
        }
    }

    /**
     * Custom attribute
     *
     * @return array
     */
    protected function attributes(): array
    {
        return [
            'name'     => 'Key',
            'alias'    => '名称',
            'value'    => '真值',
            'describe' => '描述',
        ];
    }

    protected function gate($model){}
}
