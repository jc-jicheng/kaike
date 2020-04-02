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
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
