<template>
  <div id="app">
    <h1>Vue-Router</h1>
    <nav>
      <router-link exact :to="{name: 'home'}">Home</router-link>
      <span> | </span>
      <router-link :to="{name: 'about'}">About</router-link>
      <span> | </span>
      <router-link :to="{name: 'user'}">User</router-link>
      <span> | </span>
      <router-link :to="{name: 'book'}">Book</router-link>
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
