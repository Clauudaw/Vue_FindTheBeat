<script setup lang="ts">
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
<template>
  <div class="arrow-up" @click="goToTop">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 383.15 383.33"
    aria-labelledby="scroll-to-top"
  >
    <title lang="es">Arrow Up</title>
    <g fill="#CCCCCC">
      <path
        d="M383,88.4c0-16.3-3.8-31.9-11.8-46.3c-11.2-20-28.3-32.5-50.4-38.3c-9.5-2.5-19.1-3.4-28.9-3.6
      C274.5,0.1,257,0,239.6,0c-45.2,0-90.3-0.1-135.5,0c-14,0-27.8,1.5-41.6,4.3C32.2,10.6,8.3,36.7,3,66.2C2,72.1,1.5,78.1,0.6,84
      c-0.1,1-0.4,1.9-0.6,2.9v205.9c0.5,3.4,1.1,6.8,1.6,10.3c1.9,13.5,5.1,26.7,11.4,38.9c8.1,15.6,20.5,26.4,36.7,33
      c9.7,4,19.8,5.7,30.2,6.1c13.3,0.5,26.6,1.1,39.9,1.7c1,0,1.9,0.4,2.9,0.6h143c1.7-0.2,3.4-0.5,5.1-0.6
      c12.8-0.6,25.7-0.6,38.5-1.9c32.9-3.1,55-20.8,67.2-51.2c4.5-11.3,6.6-23.3,6.6-35.5C383.2,225.6,383.2,157,383,88.4L383,88.4z"
      />
      <path fill="#1F1F1F" d="M192,145l86,86l-9,9l-77-77.1l-77,77l-9-9L192,145z" />
    </g>
  </svg>
  </div>
</template>
<style lang="scss" scoped>
.arrow-up {
  position: fixed;
  bottom: 2em;
  right: 2em;
  width: 3em;
  z-index: 3;
  cursor: pointer;
  gap: 1em;

  transition:
    fill 0.3s ease,
    transform 0.5s ease;
  &:hover {
    fill: var(--c-primary);
    transform: scale(1.25);
  }

  @media screen and (max-width: 768px) {
  right: 0.75em;
  bottom: 5.4em;
}

}
</style>
