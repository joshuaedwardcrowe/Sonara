const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {},
  mounted: function () {
    console.log("App mounted.")
  },
});