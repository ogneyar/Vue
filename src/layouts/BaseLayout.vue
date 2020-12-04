<template>
  <div id="base"> 
    <img alt="Vue logo" src="@/assets/logo.png" id="logo">

    <hr>
    <router-link to="/" class="router_link">Home Page</router-link>
    <router-link to="/practic" class="router_link">Practic</router-link>
    <router-link to="/foo" class="router_link">Go to Foo</router-link>
    <router-link to="/bar" class="router_link">Go to Bar</router-link>
    
    <router-view></router-view>
    <hr>    
    <footer>
      <h3>Подвал</h3>
    </footer>
  </div>
</template>
