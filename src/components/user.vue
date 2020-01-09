<template>
<div>
  <h2>用户中心</h2>
  <p>用户信息：</p>
  <p>用户名：{{userid}}</p>
  <!-- <p>{{$route.params.userid}}</p> -->
</div>
</template>

<script>
export default {
computed: {
  userid(){
    return this.$route.params.userid
  }
},
}
</script>

<style></style>

