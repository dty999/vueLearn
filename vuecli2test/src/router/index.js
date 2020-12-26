import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
Vue.use(VueRouter)

const routes = [
    {
        path:'/Home',
        component: Home
    },
    {
        path:'/About',
        component:About
    },{
        path:'',
        redirect:'/Home'
    },
]
const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'linkActive'
})
export default router