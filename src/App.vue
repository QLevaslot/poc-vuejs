<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <input 
      id="hero-input"
      autofocus 
      autocomplete="off" 
      placeholder="Input a new hero name here" 
      v-model="newHeroName" 
      @keyup.enter="addHero"
      @blur="resetHeroInput"
    >
    <ul>
      <hero-item v-for="hero in heroes" :hero="hero" :key="hero"></hero-item>
    </ul>
  </div>
</template>

<script>
  import HeroItem from './components/HeroItem';

  export default {
    name: 'app',
    components: {
      HeroItem,
    },
    data() {
      return {
        newHeroName: '',
      };
    },
    computed: {
      // computed properties cache results and only update based on their dependencies
      heroes() {
        return this.$store.state.heroes;
      },
    },
    methods: {
      // no dom manipulation in here
      //
      // methods can be used as computed getters
      // that don't cache results and always execute on new render
      addHero() {
        if (!this.newHeroName.trim()) {
          return;
        }
        this.$store.commit('addHero', { name: this.newHeroName });
        this.newHeroName = '';
      },
      resetHeroInput() {
        this.newHeroName = '';
      },
    },
  };
</script>

<style>
body {
    background-color: #fcfbfa;
}
</style>