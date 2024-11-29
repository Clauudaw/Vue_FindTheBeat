<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
    <div class="container">
      <!-- Marca o título -->
      <router-link class="navbar-brand" to="/">Find The Beat</router-link>

      <!-- Botón toggle para dispositivos móviles -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/spaces">Espacios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Admin">Dashboard Admin (provisional)</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
/* Estilos personalizados */
.navbar {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1030; /* Mantenerla sobre otros elementos */

  .nav-link {
    color: var(--text-color);
    text-decoration: none;

    &:hover {
      color: var(--primary-color);
    }
  }
}

/* Ajustar el espacio del contenido principal debido a la barra fija */
.main-content {
  padding-top: 4.5rem; /* Altura de la navbar para evitar que el contenido quede debajo */
}

@media (max-width: 1024px) {
  .navbar-toggler {
    border: none;
  }

  .navbar-toggler-icon {
    color: var(--primary-color);
  }
}
</style>
