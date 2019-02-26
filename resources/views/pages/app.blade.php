<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>天创</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body class="index">
<div id="app">
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img style="width: 30px;height: 30px;" src="{{ _config('logo') }}" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active"> <a class="nav-link" href="#">产品</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">技术服务</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">关于我们</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">资讯中心</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">如何购买</a> </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索">
            <div class="input-group-append">
              <span class="input-group-text"><i class="mdi mdi-search-web"></i></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
  @yield('main')
</div>
</body>
<script src="{{ asset('js/vue.js') }}"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script type="text/javascript">
  window.onload = () => {
    var app = new Vue({
      el: '#app',
      data: {}
    })
  }
</script>
</html>
