import Vue from 'vue'
import App from './App'
// 这里导入目录会自动找该目录下的index文件
import router from './router'
// import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */


// 所有的组件都继承自vue类的原型
// 在Vue中添加了router
// router源码会 注册$router 和 $route router源码会传入一个vue类 即下面的new Vue
// 所以在任何组件中都有$router 和 $route
// $router 是new 的 VueRouter 
// $route 是处于活跃状态的路由 

//在Vue原型上加个test方法 ， 所有组件都会多一个test方法 可以在任何组件中调用this.test() 检测
Vue.prototype.test = function(){
  console.log("hhh")
}
new Vue({
  el: '#app',
  router,
  // router:router,
  render: h => h(App)
  // render(h){
  //   return h(App)
  // }
})
