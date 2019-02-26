<?php

namespace App\Http\Controllers\Admin;

use Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Systems\UploadRequest;

class SystemsController extends Controller
{
    /**
     * 系统信息获取
     *
     * @return mixed
     */
    public function information()
    {
        return $this->array([
            'os'               => php_uname('s') . ' ' . php_uname('r'),
            'php_version'      => PHP_VERSION,
            'php_runer'        => php_sapi_name(),
            'php_max_upload'   => ini_get('upload_max_filesize'),
            'debug'            => config('app.debug') ? '已开启' : '已关闭',
            'cache_driver'     => config('cache.default'),
            'database_type'    => config('database.default'),
            'database_name'    => config('database.connections.mysql.username'),
            'database_host'    => config('database.connections.mysql.host'),
            'database_port'    => config('database.connections.mysql.port'),
            'database_charset' => config('database.connections.mysql.charset'),
            'server_name'      => array_get($_SERVER, 'SERVER_NAME'),
            'server_addr'      => array_get($_SERVER, 'SERVER_ADDR'),
            'server_port'      => array_get($_SERVER, 'SERVER_PORT'),
            'server_soft'      => array_get($_SERVER, 'SERVER_SOFTWARE'),
        ]);
    }

    /**
     * 文件上传
     *
     * @param UploadRequest $request
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileExistsException
     */
    public function upload(UploadRequest $request)
    {
        $file = $request->file('file');

        $filename = implode('/', ['uploads', time(), str_random(32) . '.' . $file->getClientOriginalExtension()]);

        Storage::disk('qiniu')->writeStream($filename, fopen($file->getRealPath(), 'r'));

        $url = Storage::disk('qiniu')->url($filename);

        return $this->response->array(['url' => $url, 'link' => $url]);
    }

}
