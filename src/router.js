// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('@/views/home/Home.vue')
const AddItem = ()=>import('@/views/addItem/AddItem.vue')
const Good = ()=>import('@/views/good/Good.vue')
const Login = ()=>import('@/components/common/login/Login.vue')
// 注册路由
Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        { path: '/login', components: {login: Login } },
        { path:'/home',component:Home},
        { path:'/addItem',component:AddItem},
        { path:'/good',component:Good},
        { path: '/*', redirect: '/home'}
    ]
})
router.beforeEach(function(to, from, next) {
    if (to.path != '/login') {
      if(localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })
  

// 抛出实例
export default router