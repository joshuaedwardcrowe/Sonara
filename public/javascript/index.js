const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const Twas = require('twas')

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const ConnectionIconCOmponent = require('./components/layout/ConnectionIcon.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {Bar: BarComponent, ConnectionIcon: ConnectionIconCOmponent},
  mounted: function () {
    console.log(`Vue mounted.`)
  },
});