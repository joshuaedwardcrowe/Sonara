const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const Twas = require('twas')

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const ConnectionIconComponent = require('./components/layout/ConnectionIcon.vue');
const ListenersIconComponent = require('./components/layout/ListenersIcon.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent, 
    ConnectionIcon: ConnectionIconComponent, 
    ListenersIcon: ListenersIconComponent
  },
  mounted: function () {
    console.log(`Vue mounted.`)
  },
});