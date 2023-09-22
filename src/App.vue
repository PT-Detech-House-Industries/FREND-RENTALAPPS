<template>
  <div id="app">
    <TopMenu></TopMenu>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BottomMenu></BottomMenu>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BottomMenu from './components/TopMenu.vue';
import TopMenu from './components/BottomMenu.vue';
  
export default {

  name: 'App',
  components: {
    // HelloWorld
    TopMenu,
    BottomMenu,
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
  max-width: 480px;
  margin: auto;
  min-height: 100vh;
  padding-bottom: 1px;
  margin-top: 0;
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
