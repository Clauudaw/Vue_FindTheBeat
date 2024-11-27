<template>
  <div class="app"> 
    <TheNavbar />
    <main class="container main-content">
      <router-view></router-view>
    </main>
    <TheFooter />
    <ArrowUp />
  </div>
</template>

<script setup>
import TheFooter from './components/TheFooter.vue'
import TheNavbar from './components/TheNavbar.vue'
import ArrowUp from './components/ArrowUp.vue'
</script>

<style>
.app {
  min-height: 100vh;
  background-color: var(--bg-color);
}

.main-content {
  padding: 2rem 0;
}
</style>