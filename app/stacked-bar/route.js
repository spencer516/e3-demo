import Ember from 'ember';
import data from './data';

export default Ember.Route.extend({
  actions: {
    sort() {
      let states = this.controller.get('states').slice(0);
      states.sort((a,b) => {
        return a.total > b.total ? -1 : 1;
      });
      this.controller.set('states', states);
    }
  },
  model() {
    return data;
  },
  setupController(controller, model) {
    let og = model.slice(0);
    og.sort((a,b) => {
      return a.total > b.total ? -1 : 1;
    });

    controller.set('ogStates', og);
    controller.set('states', model);
  }
});
