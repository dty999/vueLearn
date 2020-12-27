<template>
  <div>
    <h2>我是用户界面</h2>
    <p>用户内容</p>
    {{userId}}
    {{$route.params.userId}}
  </div>
</template>

<script>
export default {
  name: "User",
  components: {},
  computed:{
      userId(){
          return this.$route.params.userId
      }
  },
  created(){
    console.log('创建User');
  }
};
</script>