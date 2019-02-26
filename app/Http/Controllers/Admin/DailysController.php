<?php

namespace App\Http\Controllers\Admin;

use App\Models\Daily;
use App\Http\Controllers\Controller;
use App\Transformers\DailyTransformer;
use App\Http\Controllers\Traits\Resource;

class DailysController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * DailysController constructor.
     */
    public function __construct()
    {
        $this->model = new Daily();
        $this->transformer = new DailyTransformer();
    }

    /**
     * Filters
     *
     * @return array
     */
    protected function filters(): array
    {
        return [
            'id'          => self::FILTER_EQUAL,
            'action'      => self::FILTER_LIKE,
            'path'        => self::FILTER_LIKE,
            'created_at'  => self::FILTER_BETWEEN,
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
        return [];
    }

    /**
     * Custom attribute
     *
     * @return array
     */
    protected function attributes(): array
    {
        return [];
    }

    public function gate()
    {

    }
}
