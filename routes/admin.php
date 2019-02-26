<?php

Route::get('{name1?}/{name2?}/{name3?}/{name4?}/{name5?}', 'PagesController@index');

app('Dingo\Api\Routing\Router')->version('admin', [
    'expires'    => 1,
    'limit'      => 600,
    'namespace'  => 'App\Http\Controllers\Admin',
    'middleware' => ['bindings', 'guard.admin', 'api.throttle'],
], function ($api) {

    // 认证接口
    $api->group(['prefix' => 'auth'], function ($api) {
        $api->post('login', 'AuthController@login'); // 登录
    });

    // 以下路由需要登录
    $api->group(['middleware' => ['auth.admin', 'daily']], function ($api) {

        // 系统相关 api
        $api->group(['prefix' => 'systems'], function ($api) {
            $api->post('upload', 'SystemsController@upload'); // 文件上传
            $api->get('information', 'SystemsController@information'); // 系统信息
        });

        // 用户相关 api
        $api->group(['prefix' => 'users'], function ($api) {
            $api->get('profile', 'UsersController@profile'); // 用户信息
        });

        // 管理员 Api
        $api->patch('admins/{admin}/state', 'AdminsController@state');
        $api->resource('admins', 'AdminsController');

        // 登录记录
        $api->resource('signs', 'SignsController', ['only' => ['index', 'destroy']]);
        $api->resource('articles', 'ArticlesController');
        $api->resource('jingse', 'JingseController');

        // 系统配置
        $api->resource('configs', 'ConfigsController');
        $api->resource('pages', 'MainsController');
        $api->get('categorys/parents','CategorysController@parents');
        $api->get('categorys/all','CategorysController@all');
        $api->resource('categorys', 'CategorysController');
        $api->resource('banners', 'BannersController');
        $api->resource('books', 'BooksController');
        $api->resource('products', 'ProductsController');
        $api->resource('shops', 'ShopsController');

        $api->get('dailys', 'DailysController@index');
        $api->delete('dailys/{daily}', 'DailysController@destroy');

        $api->get('logs', 'LogsController@index');
        $api->get('logs/{log}', 'LogsController@show');

        //ty
        $api->resource('ty_banners', 'Ty_bannersController');
    });

});
