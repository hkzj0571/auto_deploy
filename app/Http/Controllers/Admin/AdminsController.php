<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Resource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Transformers\AdminTransformer;

class AdminsController extends Controller
{
    use Resource;

    /**
     * Initial constructor
     *
     * AdminsController constructor.
     */
    public function __construct()
    {
        $this->model = new Admin();
        $this->transformer = new AdminTransformer();
    }

    /**
     * Filters
     *
     * @return array
     */
    protected function filters()
    : array
    {
        return [
            'id'          => self::FILTER_EQUAL,
            'name'        => self::FILTER_LIKE,
            'mobile'      => self::FILTER_LIKE,
            'is_disabled' => self::FILTER_BOOLEAN,
            'created_at'  => self::FILTER_BETWEEN,
        ];
    }

    /**
     * Form validation criteria
     *
     * @param int $rule
     *
     * @return array
     */
    protected function rules($rule = self::RULE_STORE)
    : array
    {
        $rules = [
            'avatar'      => 'required|url',
            'name'        => 'required|string',
            'is_disabled' => 'required|boolean',
        ];

        switch ($rule) {
            case self::RULE_STORE:
                return array_merge($rules, [
                    'mobile'   => 'required|unique:admins',
                    'password' => 'required|min:6',
                ]);
            case self::RULE_UPDATE:
                return array_merge($rules, [
                    'mobile'   => [
                        'required', Rule::unique(
                            $this->model->getTable()
                        )->ignore(
                            request()->route(
                                $this->key ?: strtolower(class_basename($this->model))
                            )
                        ),
                    ],
                    'password' => 'nullable|min:6',
                ]);
        }

    }

    /**
     * Custom attribute
     *
     * @return array
     */
    protected function attributes()
    : array
    {
        return [
            'avatar'      => '用户头像',
            'name'        => '用户名称',
            'mobile'      => '手机号码',
            'password'    => '登录密码',
            'is_disabled' => '是否禁用',
        ];
    }

    public function state(Request $request, Admin $admin)
    {
        dd($admin->update(['is_disabled' => !$admin->is_disabled]));

        return $this->response->noContent();
    }

    protected function gate($model)
    {
        if (in_array($model->id, [1,2])) {
            throw new \Exception('初始管理员账号不允许删除');
        }
    }
}
