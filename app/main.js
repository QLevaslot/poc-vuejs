import Vue from 'vue';
import HeroItem from './components/hero-item/hero-item';

new Vue({
  el: '#app',
  components: {
    'hero-item': HeroItem
  },
  data: {
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
      { name: 'Tornado' }]
  },
});