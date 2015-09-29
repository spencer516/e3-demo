import Ember from 'ember';

export default Ember.Controller.extend({
  under5: true,
  under13: true,
  under17: true,
  under24: true,
  under44: true,
  under64: true,
  over65: true,

  actions: {
    updateFilters() {
      this.runFilters();
    }
  },

  watchFilters: Ember.observer('under5', function() {
    this.runFilters();
  }),

  runFilters() {
    let states = this.get('ogStates').slice(0);
    states.forEach(itm => {
      Ember.set(itm, 'populations',
        Ember.get(itm, 'populations').filter(pop => {
          switch(pop.group) {
            case 'Under 5 Years':
              return this.get('under5');
            case '5 to 13 Years':
              return this.get('under13');
            case '14 to 17 Years':
              return this.get('under17');
            case '18 to 24 Years':
              return this.get('under24');
            case '25 to 44 Years':
              return this.get('under44');
            case '45 to 64 Years':
              return this.get('under64');
            case '65 Years and Over':
              return this.get('over65');
          }
        })
      );
    });

    debugger;
    this.set('states', states);
  }
});
