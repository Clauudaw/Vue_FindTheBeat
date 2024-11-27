<template>
  <div class="app">
    <nav class="nav">
      <div class="container nav-container">
        <div class="nav-links">
          <router-link to="/" class="nav-link">Inicio</router-link>
          <router-link to="/about" class="nav-link">Acerca de</router-link>
          <router-link to="/spaces" class="nav-link">Espacios</router-link>
        </div>
      </div>
    </nav>   
    <main class="container main-content">
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from './components/TheFooter.vue'
</script>

<style>
.app {
  min-height: 100vh;
  background-color: var(--bg-color);
}

.nav {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-container {
  height: 4rem;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem;
}

.nav-link:hover {
  color: var(--primary-color);
}

.main-content {
  padding: 2rem 0;
}
</style>