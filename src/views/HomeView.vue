<template>
  <div class="card">
    <h1 class="title">Bienvenido a Vue 3</h1>
    <p class="description">
      Este es un proyecto base con Vue 3, Vite, Vue Router y Pinia.
    </p>
    <counter-component class="counter-section" />
  </div>
</template>

<script setup>
import CounterComponent from '../components/CounterComponent.vue'
</script>

<style>
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.description {
  color: #666;
  margin-bottom: 1.5rem;
}

.counter-section {
  margin-top: 1.5rem;
}
</style>