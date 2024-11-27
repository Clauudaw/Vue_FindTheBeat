<template>
  <div class="counter-card">
    <h2 class="counter-title">Contador</h2>
    <p class="counter-value">{{ count }}</p>
    <div class="counter-buttons">
      <button 
        @click="increment"
        class="btn btn-primary"
      >
        Incrementar
      </button>
      <button 
        @click="decrement"
        class="btn btn-danger"
      >
        Decrementar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const count = ref(0)

const increment = () => {
  count.value++
  store.increment()
}

const decrement = () => {
  count.value--
  store.decrement()
}
</script>

<style>
.counter-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.counter-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.counter-value {
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.counter-buttons {
  display: flex;
  gap: 0.5rem;
}
</style>