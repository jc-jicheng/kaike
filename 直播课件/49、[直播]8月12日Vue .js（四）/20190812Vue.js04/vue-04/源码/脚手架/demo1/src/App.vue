<template>
  <div id="app">
    <!-- <h1>Vue</h1> -->
    <!-- 
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld />

    <img alt="Vue logo" src="/images/kaikeba.png"> -->

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <hr>
    <router-view/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
