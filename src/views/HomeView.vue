<template>
    <!-- Sección Hero -->
  <header class="hero-section text-center">
    <div class="container">
      <h1>Encuentra el espacio perfecto para tus sesiones musicales</h1>
      <p>Explora nuestras opciones y reserva tu espacio hoy mismo</p>
      <a href="#spaces" class="btn btn-light btn-lg">Ver Espacios</a>
    </div>
  </header>

  <!-- Galería de Espacios -->
  <section id="spaces" class="container my-5">
    <h2 class="text-center mb-4">Espacios disponibles</h2>
    <div class="row g-4">
      <!-- Espacio 1 -->
      <div class="col-md-4">
        <div class="card space-card">
          <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Space 1">
          <div class="card-body">
            <h5 class="card-title">Espacio Acústico</h5>
            <p class="card-text">Un espacio ideal para grabaciones acústicas y sesiones en vivo.</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
      <!-- Espacio 2 -->
      <div class="col-md-4">
        <div class="card space-card">
          <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Space 2">
          <div class="card-body">
            <h5 class="card-title">Estudio de Grabación</h5>
            <p class="card-text">Espacio profesional con equipos de alta gama para grabaciones de calidad.</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
      <!-- Espacio 3 -->
      <div class="col-md-4">
        <div class="card space-card">
          <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Space 3">
          <div class="card-body">
            <h5 class="card-title">Sala de Ensayo</h5>
            <p class="card-text">Perfecto para ensayos grupales y sesiones de práctica.</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Formulario de suscripción -->
  <section class="container my-5 text-center">
    <h2>Suscríbete a nuestro Newsletter</h2>
    <p>Recibe las últimas novedades sobre nuestros espacios, precios y ofertas especiales.</p>
    <div class="d-flex justify-content-center">
      <input type="email" class="form-control w-50" placeholder="Tu correo electrónico" aria-label="Correo electrónico">
      <button class="btn btn-primary ms-2">Suscribirme</button>
    </div>
  </section>
</template>

<script setup>

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