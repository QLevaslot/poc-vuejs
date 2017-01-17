<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input 
      autofocus 
      autocomplete="off" 
      placeholder="Input a new hero name here" 
      v-model="newHeroName" 
      @keyup.enter="addHero"
      @blur="resetHeroInput"
    >
    <hero-item v-for="hero in heroes" :hero="hero" :key="hero"></hero-item>
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
        heroes: [
          { name: 'Mr. Nice' },
          { name: 'Narco' },
          { name: 'Bombasto' },
          { name: 'Celeritas' },
          { name: 'Magneta' },
          { name: 'RubberMan' },
          { name: 'Dynama' },
          { name: 'Dr IQ' },
          { name: 'Magma' },
          { name: 'Tornado' }],
        newHeroName: '',
      };
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
        this.heroes.push({
          name: this.newHeroName,
        });
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