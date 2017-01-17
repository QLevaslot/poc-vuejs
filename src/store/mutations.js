export const state = {
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
};

export const mutations = {
  addHero(mutState, { name }) {
    mutState.heroes.push({
      name,
    });
  },
};
