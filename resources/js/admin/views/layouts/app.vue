<script>
  import ElHeader from '../../components/Layouts/Header.vue'

  export default {
    data() {
      return {}
    },
    components: {
      ElHeader
    }
  }
</script>

<template>
  <div class="full-height">
    <el-container class="main">
      <el-aside width="250px">
        <div class="brand">
          <router-link to="/">
            <h1 style="font-size: 2rem;text-align: center;font-weight: 100;">Hang zhou</h1>
          </router-link>
        </div>
        <el-menu router :default-active="$route.name">
          <el-menu-item index="index" :route="{name:'index'}"><i class="mdi mdi-compass"></i><span slot="title">控制面板</span></el-menu-item>
          <el-submenu index="3">
            <template slot="title"><i class="mdi mdi-web"></i><span>网站设置</span></template>
            <el-menu-item index="jingse" :route="{name:'jingse'}"><i class="mdi mdi-sign-text"></i><span>景点管理</span></el-menu-item>
            <el-menu-item index="articles" :route="{name:'articles'}"><i class="mdi mdi-sign-text"></i><span>文章管理</span></el-menu-item>
            <el-menu-item index="pages" :route="{name:'pages'}"><i class="mdi mdi-book-open-page-variant"></i><span>杭州城区</span></el-menu-item>
            <el-menu-item index="categorys" :route="{name:'categorys'}"><i class="mdi mdi-brightness-2"></i><span>分类管理</span></el-menu-item>
            <el-menu-item index="banners" :route="{name:'banners'}"><i class="mdi mdi-image-album"></i><span>轮播管理</span></el-menu-item>
            <el-menu-item index="books" :route="{name:'books'}"><i class="mdi mdi-curling"></i><span>说明管理</span></el-menu-item>
            <el-menu-item index="products" :route="{name:'products'}"><i class="mdi mdi-cube"></i><span>产品管理</span></el-menu-item>
            <el-menu-item index="shops" :route="{name:'shops'}"><i class="mdi mdi-chess-bishop"></i><span>店铺管理</span></el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="mdi mdi-settings"></i><span>系统设置</span></template>
            <el-menu-item index="systems" :route="{name:'systems'}"><i class="mdi mdi-information"></i><span>系统信息</span></el-menu-item>
            <el-menu-item index="configs" :route="{name:'configs'}"><i class="mdi mdi-vector-square"></i><span>系统配置</span></el-menu-item>
            <el-menu-item index="admins" :route="{name:'admins'}"><i class="mdi mdi-account-settings-variant"></i><span>管理设置</span></el-menu-item>
            <el-menu-item index="signs" :route="{name:'signs'}"><i class="mdi mdi-account-key"></i><span>登陆日志</span></el-menu-item>
            <el-menu-item index="logs" :route="{name:'logs'}"><i class="mdi mdi-file-xml"></i><span>系统日志</span></el-menu-item>
            <el-menu-item index="dailys" :route="{name:'dailys'}"><i class="mdi mdi-bomb"></i><span>操作日志</span></el-menu-item>
          </el-submenu>

          <!--<el-submenu index="5">-->
            <!--<template slot="title"><i class="mdi mdi-settings"></i><span>天缘小程序设置</span></template>-->
            <!--<el-menu-item index="ty_banner" :route="{name:'ty_banners'}"><i class="mdi mdi-information"></i><span>轮播设置</span></el-menu-item>-->
          <!--</el-submenu>-->

        </el-menu>
      </el-aside>
      <el-container direction="vertical">
        <ElHeader></ElHeader>
        <el-main>
          <router-view/>
          <div class="footer">
            <p><i class="mdi mdi-code-tags"></i> with <i class="mdi mdi-heart"></i> by <a href="">Inkblot</a> <i class="mdi mdi-github-circle"></i></p>
            <p>Version: 1.0.0</p>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

