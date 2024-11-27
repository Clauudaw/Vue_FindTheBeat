<template>
    <nav class="nav">
      <div class="container nav-container">
        <div class="nav-links">
          <router-link to="/" class="nav-link">Inicio</router-link>
          <router-link to="/about" class="nav-link">Acerca de</router-link>
          <router-link to="/spaces" class="nav-link">Espacios</router-link>
        </div>
      </div>
    </nav>  
</template>
<style lang="scss" scoped>
.nav {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-container {
  height: 3rem;
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
</style>