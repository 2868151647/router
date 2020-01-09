<template>
  <div id="app">
    <!-- vue-router 注册的全局组件 最终会被渲染成 a 标签 -->
    <!-- <router-link to='/home' tag="button" replace active-class="active">首页</router-link>
    <router-link to='/about' replace active-class="active">关于</router-link> -->
    <!-- router-vivw 相当于告诉link的内容应该展示到哪里的展位标签 -->

    <!-- <router-link to='/home' tag="button" replace >首页</router-link>
    <router-link to='/about' replace >关于</router-link> -->

    <!-- <button @click="homeclick">主页</button>
    <button @click="aboutclick">关于</button> -->
    
    <router-link to="/home">主页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- <router-link :to="'/usercenter/'+userid">用户中心</router-link> -->
    <!-- <router-link :to="{path: '/profile',query:{name:'wang',age:12}}">档案</router-link> -->

    <button @click="userclick">用户</button>
    <button @click="profileclick">档案</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeclick(){
      // this.$router.push("/home")
      this.$router.replace("/home")
      console.log("home")
    },
    aboutclick(){
      // this.$router.push("/about")
      this.$router.replace("/about")
      console.log("about")
    },
    userclick(){
      this.$router.push("/usercenter/"+this.userid)
    },
    profileclick(){
      this.$router.push({
        path:"/profile",
        query:{
          name:"xiaoxi",
          age:12
        }
      })
    }
  },
  data() {
    return {
      userid:'zhang'
    }
  },
}
</script>

<style>
.router-link-active{
  color: #ff0000
}
.active{
  color: #1b9e51
}
</style>
