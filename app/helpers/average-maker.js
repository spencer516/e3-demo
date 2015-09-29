import Ember from 'ember';

export function averageMaker(params) {
  let model = params[0];
  let averages = {};

  model.forEach(item => {
    let dow = item.dayOfWeek;
    if(!averages[dow]) {
      averages[dow] = {
        value: 0,
        salamis: 0,
        total: 0
      };
    }

    averages[dow].value += item.value;
    averages[dow].salamis += item.salamis;
    averages[dow].total++;
  });

  let result = [];
  Object.keys(averages).forEach(dow => {
    result.push({
      dayOfWeek: dow,
      value: averages[dow].value / averages[dow].total,
      salamis: averages[dow].salamis / averages[dow].total
    });
  });

  return result;
}

export default Ember.Helper.helper(averageMaker);
