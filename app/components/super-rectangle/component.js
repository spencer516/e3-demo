
// app/components/super-rectangle/component.js
import rectangle
  from 'ember-e3/components/e3-shape/rectangle';

import scaleEnd
  from 'ember-e3/utils/e3-helpers/scale/end';

export default rectangle.extend({
  enterState: {
    height: 500,
    y: scaleEnd('y')
  },

  animation: {
    duration: 400,
    ease: 'elastic'
  },

  click() {
    let data = this.getAttr('data');
    alert(`You clicked on ${data.character}`);
  }
});



