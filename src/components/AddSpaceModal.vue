<template>
  <div class="modal fade show" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Añadir Nuevo Espacio</h5>
          <button type="button" class="btn-close" @click="$emit('close-modal')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addSpace">
            <div class="mb-3">
              <label for="spaceName" class="form-label">Nombre del Espacio</label>
              <input type="text" class="form-control" id="spaceName" placeholder="Ejemplo: Estudio de Grabación" v-model="spaceName" />
            </div>
            <div class="mb-3">
              <label for="spaceDescription" class="form-label">Descripción</label>
              <textarea class="form-control" id="spaceDescription" rows="3" placeholder="Descripción del espacio..." v-model="spaceDescription"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Añadir Espacio</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const spaceName = ref('');
const spaceDescription = ref('');

const addSpace = () => {
  console.log('Espacio añadido:', {
    name: spaceName.value,
    description: spaceDescription.value,
  });
  // Lógica para enviar datos al backend
};
</script>

<style scoped>
.modal.fade {
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  padding: 1rem;
}
</style>
