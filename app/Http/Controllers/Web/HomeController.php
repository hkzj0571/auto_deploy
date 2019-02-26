<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Banner;
use App\Models\Article;
use App\Models\Book;
use App\Models\Page;
use App\Transformers\CategoryTransformer;
use App\Transformers\ProductTransformer;
use App\Transformers\BannerTransformer;
use App\Transformers\ArticleTransformer;
use App\Transformers\BookTransformer;
use App\Transformers\PageTransformer;

class HomeController extends Controller
{
    //获取头部分类
    public function getcategory()
    {
        $cate = Category::where('parent_id','0')->limit(7)->orderby('weight','desc')->get();
        return $this->response->collection($cate,new CategoryTransformer())->setStatusCode(200);
    }

    //获取推荐分类列表
    public function get_commend_cate()
    {
        $cate = Category::where('is_index','1')->limit(7)->orderby('weight','desc')->get();
        return $this->response->collection($cate,new CategoryTransformer())->setStatusCode(200);
    }

    //获取分类下的商品
    public function get_product_list()
    {
        $list = Product::query()
            ->where('first_category_id', request('id'))
            ->orwhere('second_category_id', request('id'))
            ->orderby('weight','desc')->limit(20)->get();

        return $this->response->collection($list,new ProductTransformer());
    }

    //获取四个推荐商品
    public function get_introduce_product()
    {
        $list = Product::limit(4)->orderby('weight','desc')->get();
        return $this->response->collection($list,new ProductTransformer());
    }

    //获取轮播
    public function get_banner()
    {
        $banner = Banner::limit(5)->orderby('weight','desc')->get();
        return $this->response->collection($banner,new BannerTransformer());
    }

    //获取主页推荐分类及商品
    public function get_more_product()
    {
        $product = Category::where('parent_id','0')->with('kids_product')->limit(4)->orderby('weight','desc')->get();
        return $this->response->array($product);
    }

    //获取商品详情
    public function get_main_product()
    {
        $list = Product::query()
            ->where('id', request('id'))
            ->get();
        return $this->response->collection($list,new ProductTransformer());
    }

    //商品搜索
    public function search_product()
    {
        $list = Product::query()
            ->when(request('category_id'), function ($query) {
                return $query->where('first_category_id', request('category_id'));
            })
            ->when(request('name'), function ($query) {
                return $query->where('name', 'like', '%' . request('keywords') . '%');
            })

            ->get();
        return $this->response->collection($list,new ProductTransformer());
    }
    
    //新闻资讯
    public function get_articles()
    {
        $articles = Article::limit(4)->orderby('weight','desc')->get();
        return $this->response->collection($articles,new ArticleTransformer());
    }

    //获取新闻资讯详情
    public function get_main_articles()
    {
        $articles = Article::query()
            ->where('id', request('id'))
            ->get();
        return $this->response->collection($articles,new ArticleTransformer());
    }

    //获取视频
    public function get_video()
    {
        $book = Book::limit(4)->orderby('created_at','desc')->get();
        return $this->response->collection($book,new BookTransformer());
    }

    //关于我们
    public function get_aboutus()
    {
        $page = Page::limit(5)->orderby('created_at','desc')->get();
        return $this->response->collection($page,new PageTransformer());
    }

    //关于详情
    public function get_main_aboutus()
    {
        $page = Page::query()
            ->where('id', request('id'))
            ->get();
        return $this->response->collection($page,new PageTransformer());
    }
    



}
