<template>
  <div id="app">
    <!-- <router-link to="/Home" tag='button' replace >首页</router-link>
    <router-link to="/About" tag="button" replace >关于</router-link> -->
    <!-- <button @click="handClick1">首页</button>
    <button @click="handClick2">关于</button> -->

    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link>
    <router-link :to="'/User/'+userId" tag='button' replace >用户</router-link>
    <router-link to="/Profile" tag="button" replace>档案</router-link>

    <keep-alive exclude="Profile,User">
    <router-view></router-view>
    
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    // handClick1() {
    //   this.$router.push("/Home");
    // },
    // handClick2() {
    //   this.$router.push("/About");
    // },
  },
  data() {
    return {
      userId:'wangwu'
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.linkActive {
  color: red;
}
</style>
