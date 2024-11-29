<template>
  <div :class="['sidebar', { active: isActive }]">
    <h3 class="text-white text-center">Panel de Control</h3>
    <a href="#">Dashboard</a>
    <a href="/src/spaces-section.html">Gestión de Espacios</a>
    <a href="#users-section">Usuarios</a>
    <div class="sidebar-footer">
      <a href="#settings-section">Configuración</a>
      <button id="themeToggle" class="button-theme"><i class="bi bi-moon"></i></button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isActive: { type: Boolean, required: true },
});

const emit = defineEmits(['close-sidebar']);

// Cierra el sidebar al hacer clic fuera
const closeOnOutsideClick = (event) => {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && !sidebar.contains(event.target)) {
    emit('close-sidebar');
  }
};

document.addEventListener('click', closeOnOutsideClick);
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  height: 100%;
  width: 250px;
  background-color: #1F1F1F;
  overflow: auto;
  transition: 0.3s;
}

.sidebar.active {
  left: 0;
}

.sidebar-footer {
  margin-top: auto;
  padding: 1rem;
}

a {
  display: block;
  color: white;
  padding: 1rem;
  text-decoration: none;
}
</style>
