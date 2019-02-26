import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

const _import = name => import(`../views/${name}`)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'admin',
  routes: [
    {
      path: '/auth',
      name: 'auth',
      meta: { is_guest: true },
      redirect: { name: 'auth.login' },
      component: () => _import('auth/index.vue'),
      children: [
        {
          path: 'login',
          name: 'auth.login',
          meta: { is_guest: true },
          component: () => _import('auth/login.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: { name: 'index' },
      component: () => _import('layouts/app.vue'),
      children: [
        {
          path: '/',
          name: 'index',
          component: () => _import('pages/index.vue'),
        },
        {
          path: 'systems',
          name: 'systems',
          component: () => _import('systems/index.vue'),
        },
        {
          path: 'admins',
          name: 'admins',
          component: () => _import('admins/index.vue'),
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => _import('articles/index.vue'),
        },
        {
          path: 'articles/create',
          name: 'articles.create',
          component: () => _import('articles/create.vue'),
        },
        {
          path: 'articles/:id/edit',
          name: 'articles.edit',
          component: () => _import('articles/edit.vue'),
        },
        // {
        //     path: 'ty_banners',
        //     name: 'ty_banners',
        //     component: () => _import('ty_banner/index.vue'),
        // },

          {
              path: 'jingse',
              name: 'jingse',
              component: () => _import('jingse/index.vue'),
          },
          {
              path: 'jingse/create',
              name: 'jingse.create',
              component: () => _import('jingse/create.vue'),
          },
          {
              path: 'jingse/:id/edit',
              name: 'jingse.edit',
              component: () => _import('jingse/edit.vue'),
          },
        {
          path: 'products',
          name: 'products',
          component: () => _import('products/index.vue'),
        },
        {
          path: 'products/create',
          name: 'products.create',
          component: () => _import('products/create.vue'),
        },
        {
          path: 'products/:id/edit',
          name: 'products.edit',
          component: () => _import('products/edit.vue'),
        },
        {
          path: 'pages',
          name: 'pages',
          component: () => _import('mains/index.vue'),
        },
        {
          path: 'pages/create',
          name: 'pages.create',
          component: () => _import('mains/create.vue'),
        },
        {
          path: 'pages/:id/edit',
          name: 'pages.edit',
          component: () => _import('mains/edit.vue'),
        },
        {
          path: 'dailys',
          name: 'dailys',
          component: () => _import('dailys/index.vue'),
        },
        {
          path: 'categorys',
          name: 'categorys',
          component: () => _import('categorys/index.vue'),
        },
        {
          path: 'banners',
          name: 'banners',
          component: () => _import('banners/index.vue'),
        },
        {
          path: 'books',
          name: 'books',
          component: () => _import('books/index.vue'),
        },
        {
          path: 'shops',
          name: 'shops',
          component: () => _import('shops/index.vue'),
        },
        {
          path: 'configs',
          name: 'configs',
          component: () => _import('configs/index.vue'),
        },
        {
          path: 'logs',
          name: 'logs',
          component: () => _import('logs/index.vue'),
          children: [
            {
              path: ':log',
              name: 'logs.show',
              component: () => _import('logs/show.vue'),
            }
          ]
        },
        {
          path: 'signs',
          name: 'signs',
          component: () => _import('signs/index.vue'),
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next, redirect) => {
  NProgress.start()
  if (localStorage.token || to.meta.is_guest) {
    next()
  } else {
    next({ name: 'auth.login' })
  }
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
