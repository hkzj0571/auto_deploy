<?php

namespace App\Providers;

use League\Fractal\Manager;
use App\Serializer\ArraySerializer;
use Illuminate\Support\ServiceProvider;
use Dingo\Api\Transformer\Adapter\Fractal;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app['Dingo\Api\Transformer\Factory']->setAdapter(function ($app) {
            $fractal = new Manager();
            $fractal->setSerializer(new ArraySerializer());
            return new Fractal($fractal, 'include', ',');
        });

        app('Dingo\Api\Exception\Handler')->register(function (ModelNotFoundException $e) {
            throw new NotFoundHttpException('404 Not Found!');
        });

        app('Dingo\Api\Exception\Handler')->register(function (ValidationException $e) {
            throw new BadRequestHttpException($e->validator->errors()->first());
        });
    }
}
