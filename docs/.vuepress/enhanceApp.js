import vuetify from '../../src/plugins/vuetify';

import HelloWorld from '../../src/components/HelloWorld.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  options.vuetify = vuetify;
  Vue.component(HelloWorld.name, HelloWorld);
}