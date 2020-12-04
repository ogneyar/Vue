import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  { 
    path: '/',
    meta: {layout: 'base'},
    component: () => import('./components/Home.vue') 
  },  
  { 
    path: '/practic', 
    name: 'practic',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Home.vue') 
  },  
  { 
    path: '/practic/categories', 
    name: 'categories',
    meta: {layout: 'practic'},
    component: () => import('./components/practic/Categories.vue') 
  },
  { 
    path: '/foo', 
    name: 'foo',
    meta: {layout: 'base'},
    component: () => import('./components/Foo.vue') 
  },
  { 
    path: '/bar', 
    name: 'bar',
    meta: {layout: 'base'},
    component:  () => import('./components/Bar.vue') 
  },
  { 
    path: '/**/', 
    component: () => import('./components/NotFound.vue') 
  }
]

const router = new Router({
  mode: 'history',
  routes 
})

Vue.use(Router)
Vue.config.productionTip = false

export default router