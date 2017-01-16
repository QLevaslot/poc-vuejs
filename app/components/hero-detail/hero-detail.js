import Vue from 'vue';

const HeroInput = Vue.extend({
  props: ['name'],
  template: `
  <div>
    <p>Hello {{ name | capitalize }}</p>
  </div>
  `,
  filters: {
    capitalize: (value) => {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
});
export default HeroInput;