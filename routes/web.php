<?php

//Route::get('/','PagesController@index');
Route::get('/','PagesController@index');




$api = app('Dingo\Api\Routing\Router'); //添加这句话

$api->version('v1',[
    'namespace' => 'App\Http\Controllers\Web',
    'middleware' => 'coss',
],function ($api){ //function（$api） 自动在路由前面就加上了 /api/xxx/xxx
    // 测试route是否通
    $api->get('hh',function (){
        return [
            'msg' => 'haha'
        ];
    });

    $api->get('getcategory','HomeController@getcategory');

    $api->get('get_commend_cate','HomeController@get_commend_cate');

    $api->any('get_product_list','HomeController@get_product_list');

    $api->get('get_introduce_product','HomeController@get_introduce_product');

    $api->get('get_banner','HomeController@get_banner');

    $api->get('get_more_product','HomeController@get_more_product');

    $api->any('get_main_product','HomeController@get_main_product');

    $api->any('search_product','HomeController@search_product');

    $api->get('get_articles','HomeController@get_articles');

    $api->any('get_main_articles','HomeController@get_main_articles');

    $api->get('get_video','HomeController@get_video');

    $api->get('get_aboutus','HomeController@get_aboutus');

    $api->any('get_main_aboutus','HomeController@get_main_aboutus');






});
