import Ember from 'ember';

export default Ember.Controller.extend({
  characters: [],
  text: '',

  updateText(val) {
    this.processWords(val);
  },

  processWords(text) {
    let total = text.length;
    let chars = Object.create(null);

    text.split('').forEach(char => {
      char = /\s/.test(char) ? '\\s' : char;
      if(!(char in chars)) {
        chars[char] = 0;
      }
      chars[char]++;
    });

    let characters = Object.keys(chars).map(char => {
      return {
        character: char,
        total: chars[char]
      };
    }).sort((a,b) => {
      return a.character > b.character ? 1 : -1;
    });

    this.set('characters', characters);
  }
});
