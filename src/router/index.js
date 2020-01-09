import VueRouter from 'vue-router'
import Vue from 'vue'
// import home from '../components/home.vue'
// import about from '../components/about.vue'
// import user from '../components/user.vue'
// 懒加载
const home = () => import('../components/home.vue')
const homenews = () => import('../components/homenews.vue')
const hometittle = () => import('../components/hometitle.vue')
const about = () => import('../components/about.vue')
const user = () => import('../components/user.vue')
const profile = () => import('../components/profile.vue')
// 1.安装插件
Vue.use(VueRouter)

// 调用VueRouter.install

//2.创建router对象
const router = new VueRouter({
  routes:[
    {
      path:"",
      //重定向到路径
      redirect:'/home'
    },
    {
      path:'/home',
      //这里是component不加s啊兄弟
      component:home,
      meta:{
        title:"首页"
      },
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          // 子路由不能加/ ,不然会显示不出来
          path:'news',
          component:homenews
        },
        {
          path:'tittle',
          component:hometittle
        }
      ]
    },
    {
      path:'/about',
      component:about,
      meta:{
        title:"关于"
      }
    },
    {
      path:"/usercenter/:userid",
      component:user,
      meta:{
        title:"用户"
      }
    },
    {
      path:'/profile',
      component:profile,
      meta:{
        title:"档案"
      }
    }
  ],
  mode:"history",
  linkActiveClass:"active"
})

//全局导航守卫
router.beforeEach(function(to,from,next){
  document.title = to.matched[0].meta.title
  next()
})
//3.将router传入vue实例中
export default router