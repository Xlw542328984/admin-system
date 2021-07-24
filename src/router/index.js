import Vue from 'vue'
import VueRouter from 'vue-router';

const Login = () => import  ('../view/Login.vue')
const Home = () => import  ('../view/Home.vue')
const Welcome = () => import('../view/Welcome.vue')

const Users = () => import('../view/user/User.vue')
const Rights = () => import('../view/power/Rights.vue')
const Roles = () => import( '../view/power/Roles.vue')

const Cate = () => import('../view/goods/Cate.vue')
const Params = () => import('../view/goods/Params.vue')

const GoodsList = () => import('../view/goods/List.vue')
const Add = () => import('../view/goods/Add.vue')

const Order = () => import('../view/order/Order.vue')
const Report = () => import('../view/report/Report.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home',
    component: Home,
    redirect: '/Welcome',
    children: [
      { path: '/home', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: GoodsList },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order },
      { path: '/reports', component: Report }
    ]
  }
]


const router = new VueRouter({
  routes
})



export default router
