<template>
  <div class="admin-view">

    <!-- Contenido principal -->
    <div class="content">
      <div class="container">
        <!-- Dashboard -->
        <h2>Bienvenido al Panel de Administrador</h2>
        <p>(poder visualizar aqui las tablas)</p>

        <!-- Configuración -->
        <section id="settings-section" class="my-5">
          <h3>Configuración</h3>
          <p>esto ya veremos que tiene</p>
        </section>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado reactivo para el sidebar y el modal
const sidebarActive = ref(false);
const showModal = ref(false);

// Métodos
const toggleSidebar = () => {
  sidebarActive.value = !sidebarActive.value;
};

const closeSidebar = () => {
  sidebarActive.value = false;
};

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<style scoped>
.admin-view {
  font-family: 'Arial', sans-serif;
  margin-top: 3.65em;
}

.sidebar-toggle {
  border: none;
  background: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.content {
  padding: 1rem;
}

.footer {
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: #f8f9fa;
}



</style>
