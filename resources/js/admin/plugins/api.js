export default {
  auth: {
    login: 'auth/login'
  },
  admins: {
    index: 'admins',
    store: 'admins',
    state: id => `admins/${id}/state`,
    update: id => `admins/${id}`,
    destroy: id => `admins/${id}`
  },
  books: {
    index: 'books',
    store: 'books',
    update: id => `books/${id}`,
    destroy: id => `books/${id}`
  },
  shops: {
    index: 'shops',
    store: 'shops',
    update: id => `shops/${id}`,
    destroy: id => `shops/${id}`
  },
  articles: {
    index: 'articles',
    store: 'articles',
    show: id => `articles/${id}`,
    update: id => `articles/${id}`,
    destroy: id => `articles/${id}`
  },
    jingse: {
        index: 'jingse',
        store: 'jingse',
        show: id => `jingse/${id}`,
        update: id => `jingse/${id}`,
        destroy: id => `jingse/${id}`
    },
  products: {
    index: 'products',
    store: 'products',
    show: id => `products/${id}`,
    update: id => `products/${id}`,
    destroy: id => `products/${id}`
  },
  pages: {
    index: 'pages',
    store: 'pages',
    show: id => `pages/${id}`,
    update: id => `pages/${id}`,
    destroy: id => `pages/${id}`
  },
  configs: {
    index: 'configs',
    store: 'configs',
    state: id => `configs/${id}/state`,
    update: id => `configs/${id}`,
    destroy: id => `configs/${id}`
  },
  banners: {
    index: 'banners',
    store: 'banners',
    update: id => `banners/${id}`,
    destroy: id => `banners/${id}`
  },
  categorys: {
    index: 'categorys',
    all: 'categorys/all',
    parents: 'categorys/parents',
    store: 'categorys',
    update: id => `categorys/${id}`,
    destroy: id => `categorys/${id}`
  },
  logs: {
    index: 'logs',
    show: id => `logs/${id}`,
  },
  dailys: {
    index: 'dailys',
    destroy: id => `dailys/${id}`
  },
  signs: {
    index: 'signs',
    destroy: id => `signs/${id}`
  },
  systems: {
    upload: 'systems/upload',
    information: 'systems/information',
  },
  users: {
    profile: 'users/profile'
  }
}
