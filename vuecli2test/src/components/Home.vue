<template>
  <div>
    <h2>我是首页</h2>
    <p>首页内容</p>
    <router-link to="/News" tag="button" replace>新闻</router-link>
    <router-link to="/Message">消息</router-link>
  <keep-alive>
    <router-view></router-view>
  
  </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      path:'/Home'
    }
  },
  created(){
    console.log('创建');
  },
  destroyed(){
    console.log('销毁');
  },
  activated(){
    this.$router.push(this.path)
  },
  // 
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }
};
</script>
