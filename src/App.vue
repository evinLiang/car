<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>     
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
    '$route':function(to,from){
        document.body.scrollTop = '0';
    }
  }
}
</script>

<style scoped>
#app { font-size: 14px; height: 100%; }
</style>
