<template>
  <div>
    <h2>我是首页信息</h2>
    <!-- 这里开头要记得加 '/' -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/tittle">标题</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log("homeCreated")
    // document.title="首页"
  },
}
</script>

<style>

</style>