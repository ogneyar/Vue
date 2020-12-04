<template>
  <div>      
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        
    <div class="app-main-layout">
      
      <Navbar />

      <Sidebar />    

      <main class="app-content">
        <div class="app-page">

          <router-view />

        </div>      
      </main>

      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/includes/Navbar'
import Sidebar from '@/components/includes/Sidebar'

export default {
  name: 'practic-layout',
  components: {
    Navbar, Sidebar
  }
}
</script>

