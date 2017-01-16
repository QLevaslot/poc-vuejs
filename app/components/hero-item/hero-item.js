import Vue from 'vue';

const HeroItem = Vue.extend({
  props: ['hero'],
  template: `
    <transition name="hero-item-transition">
      <li>{{ hero.name }}</h1>
    </transition>
  `,
});

export default HeroItem;