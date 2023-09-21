<template>
  <div id="app">
    <Menu></Menu> <!-- Gunakan komponen Menu -->
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue';
  
export default {

  name: 'App',
  components: {
    // HelloWorld
    Menu,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  max-width: 480px;
  margin: auto;
  min-height: 100vh;
  padding-bottom: 1px;
}

/* Media query untuk perangkat mobile */
@media screen and (max-width: 768px) {
  #app {
    /* Gaya khusus untuk perangkat mobile */
    min-height: 100vh;
  }
}

/* Media query untuk tablet */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  #app {
    /* Gaya khusus untuk tablet */
    min-height: 100vh;
  }
}
</style>
