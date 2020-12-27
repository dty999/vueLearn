import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path:'/Profile',
    component:()=>import('../components/Profile')
  },
  {
  path: '/User/:userId',
  component: () => import('../components/User')
},
{
  path: '/Home',
  component: Home,
  children: [{
    path: '/News',
    component: () => import('../components/News')
  },
  {
    path: '/Message',
    component: () => import('../components/Message')
  },
  {
    path: '',
    redirect: '/News'
  }
  ]
},
{
  path: '/About',
  component: About
}, {
  path: '',
  redirect: '/Home'
},
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'linkActive'
})

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
