<template>
  <div id="app">
    <nav>
      <router-link exact :to="{name: 'home'}">Home</router-link>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
.router-link-active {
  color: red;
}
</style>
