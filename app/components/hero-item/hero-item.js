import Vue from 'vue';

const HeroItem = Vue.extend({
  props: ['hero'],
  template: '<li>{{ hero.name }}</h1>',
});

export default HeroItem;