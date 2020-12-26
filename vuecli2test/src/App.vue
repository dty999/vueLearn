<template>
  <div id="app">
    <!-- <router-link to="/Home" tag='button' replace >首页</router-link>
    <router-link to="/About" tag="button" replace >关于</router-link> -->
    <button @click="handClick1">首页</button>
    <button @click="handClick2">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods:{
    handClick1(){
      this.$router.push('/Home')
    },
    handClick2(){
      this.$router.push('/About')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.linkActive{
  color: red;
}
</style>
