import Vue from 'vue';
import HeroDetail from './components/hero-detail/hero-detail';
import HeroItem from './components/hero-item/hero-item';

// Create new ViewModel instance
// Has lifecycle, manages its children views through props
export const app = new Vue({
  el: '#app',
  components: {
    'hero-detail': HeroDetail,
    'hero-item': HeroItem,
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
      { name: 'Tornado' }],
    newHeroName: 'Hero',
  },
  created: function() {
    // `this` points to the vm instance
     console.log('New hero name initialized is: ' + this.newHeroName)
  },
  computed: {
    // a computed getter, cache result based on dependancy;
    reversedHeroes: {
      get: function() {
        // `this` points to the vm instance
        return this.heroes.reverse();
      }
      // can use a setter if needed
      // set: function(newValue) {this.heroes = newValue.reverse(); } // reversedHeroes = "oreH";
    }
  },
  methods: {
    // no dom manipulation in here
    addHero: function () {
      if(!this.newHeroName.trim()) {
        return;
      }
      console.log(this.newHeroName);
      this.heroes.push({
        name: this.newHeroName,
      })
      this.newHeroName = '';
    },
    reverseHero: function() {
      this.newHeroName = this.newHeroName.split('').reverse().join('')
    },
    // methods can be used as computed getters that don't cache results and always execute on new render
    getLastUpdateDate: function () {
      return new Date();
    },
  },
  watch: {
    // don't overuse, computed may be better depending on context.
    // newHeroName: function(newValue) {}
  },
});