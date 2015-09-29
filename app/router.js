import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stacked-bar');
  this.route('words');
  this.route('words-1');
  this.route('words-2');
  this.route('words-3');
  this.route('words-4');
  this.route('words-5');
  this.route('words-6');
  this.route('words-7');
});

export default Router;
