<template>
  <transition name="hero-item-transition">
    <li>{{ hero.name }}</h1>
  </transition>
</template>

<script>
  export default {
    created() {
      // I'm not sure what i want to do here yet.
    },
    props: ['hero'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-item-transition-enter-active, .hero-item-transition-leave-active {
    transition: opacity 0.3s
}
.hero-item-transition-enter, .hero-item-transition-leave-to {
    opacity: 0;
}
</style>