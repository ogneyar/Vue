<template>
  <div id="app"> 

    <img alt="Vue logo" src="./assets/logo.png">

    <hr>
    <router-link to="/">Go to Home</router-link> | 
    <router-link to="/foo">Go to Foo</router-link> | 
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
    <hr>

    <HelloWorld msg="Welcome to Your Vue.js App"/>  
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 30px;
}
</style>
