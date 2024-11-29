<template>
  <div class="app">
    <TheNavbar />
    <main class="container main-content">
      <router-view></router-view>
    </main>
    <NewsLetterForm />
    <TheFooter />
    <ArrowUp />
  </div>
</template>

<script setup>
import TheFooter from './components/TheFooter.vue'
import TheNavbar from './components/TheNavbar.vue'
import ArrowUp from './components/ArrowUp.vue'
import NewsLetterForm from './components/NewsLetterForm.vue';
</script>

<style lang ="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-color);
}

.main-content {
  flex-grow: 1;
  padding: 2rem 0;
}

TheFooter {
  margin-top: auto;
}


::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: var(--text-color);
  border-radius: 5px;
}


body {
  overflow-y: scroll;
}



</style>
