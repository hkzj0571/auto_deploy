<?php

namespace App\Http\Controllers\Traits;

use Exception;

trait Resource
{

    /**
     * @var Resource key
     */
    protected $key;

    /**
     * @var Resource model
     */
    protected $model;

    /**
     * @var Resourcce transformer
     */
    protected $transformer;

    /**
     * @var string Resource transformer key
     */
    protected $resource_key = 'data';


    /**
     * Resource Controller for index method
     *
     * @param Request $request
     *
     * @return \Dingo\Api\Http\Response
     */
    public function index()
    {
        return $this->response->paginator(
            $this->filterQuery()->orderBy('id', 'desc')->paginate(request('limit', 10)),
            $this->transformer,
            ['key' => $this->resource_key]
        );
    }

    public function show()
    {
        return $this->response->item($this->getCurrentResource(), $this->transformer);
    }

    /**
     * Resource store metho
     *
     * @return mixed
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store()
    {
        $this->model->create(
            $this->getValidatedInput(
                $this->rules(self::RULE_STORE),
                $this->attributes()
            )
        );

        return $this->response->noContent();
    }

    /**
     * Update Current resource
     *
     * @param Request $request
     *
     * @return \Dingo\Api\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update()
    {
        $this->getCurrentResource()->update(
            $this->getValidatedInput(
                $this->rules(self::RULE_UPDATE),
                $this->attributes()
            )
        );

        return $this->response->noContent();
    }

    /**
     * Resource Controller for Destrot method
     *
     * @param Request $request
     *
     * @return \Dingo\Api\Http\Response|void
     */
    public function destroy()
    {
        $model = $this->getCurrentResource();

        try {
            $this->gate($model);
        } catch (Exception $exception) {
            return $this->response->errorBadRequest($exception->getMessage());
        }

        $model->delete();

        return $this->response->noContent();
    }

    /**
     * Custom attribute name
     *
     * @return array
     */
    protected function attributes()
    : array
    {
        return [];
    }

    /**
     * Validate rules
     *
     * @return array
     */
    protected function rules()
    : array
    {
        return [];
    }

    /**
     * Return filterd query
     *
     * @return Resource
     */
    protected function filterQuery()
    {
        foreach ($this->filters() as $key => $value) {
            $input = request($key);
            if (!is_null($input)) {
                switch ($value) {
                    case self::FILTER_LIKE:
                        $this->model = $this->model->where($key, 'like', '%' . $input . '%');
                        break;
                    case self::FILTER_BOOLEAN:
                        $this->model = $this->model->where($key, !$input || $input == 'false' ? false : true);
                        break;
                    case self::FILTER_EQUAL:
                        $this->model = $this->model->where($key, $input);
                        break;
                    case self::FILTER_BETWEEN:
                        $this->model = $this->model->whereBetween($key, $input);
                        break;
                }
            }
        }

        return $this->model;
    }

    /**
     * Get validated input data
     *
     * @param array $rules
     * @param array $attributes
     *
     * @return array
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function getValidatedInput(array $rules, array $attributes = [])
    : array
    {
        return $this->validate(request(), $rules, [], $attributes);
    }

    /**
     * Get current resource object
     *
     * @return mixed
     */
    protected function getCurrentResource()
    {
        $this->key = $this->key ?: strtolower(class_basename($this->model));

        return $this->model->findOrFail(request()->route($this->key));
    }
}
