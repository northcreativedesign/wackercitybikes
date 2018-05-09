import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sights');
  this.route('bikes');
  this.route('why_us');
  this.route('our_story');
  this.route('get_to_us');
});

export default Router;
