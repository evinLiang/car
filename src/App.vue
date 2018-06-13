<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>     
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app { font-size: 14px; height: 100%; }
</style>
