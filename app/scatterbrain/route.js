import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    change() {
      this.set('controller.model',
        generateData(50));
    }
  },
  model() {
    return generateData(50);
  }
});

let days = ['Su', 'M', 'T', 'W', 'R', 'F', 'Sa'];

function generateData(amount) {
  let result = [];

  while(--amount >= 0) {
    result.push({
      salamis: Math.floor(Math.random()*20),
      value: Math.floor(Math.random()*1000),
      dayOfWeek: days[Math.floor(Math.random()*7)]
    });
  }

  return result;
}
