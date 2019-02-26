<?php

namespace App\Http\Controllers;

use App\Models\Sign;
use App\Models\Ty_banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class PagesController extends Controller
{
    public function index()
    {
//        dd(Ty_banner::all());
            // redis存储
//        $info = Sign::all();
//        Redis::set('ingos',serialize($info->toArray()));
//        $results = Redis::get('ingos');
//        dump($results);
//        dump(unserialize($results));die;

        $a = array('a','b','c');
        array_push($a,'d');
        dd($a);

//        return $this->getBag(100,10);
        return view('pages.index');
    }

    private function getBag(int $money, $count):int
    {
        $res = [];
        for ($i = 0; $i < $count; $i++) {
            //如果是最后一次生成红包
            if ($count - $i == 1) {
                array_push($res, $money);
                break;
            }
            //剩余红包数
            $newcount = $count - 1;
            $less = intval($money / $newcount * 3);
            $newbag = rand(1, $less);
            array_push($res, $newbag);
            $money = $money - $newbag;
        }
        return $res;
    }

    public function indexx()
    {
        return view('home.indexx');
    }
}
