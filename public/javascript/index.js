const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const Twas = require('twas')

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const ConnectionIconComponent = require('./components/layout/ConnectionIcon.vue');
const ListenersIconComponent = require('./components/layout/ListenersIcon.vue');
const ReportBugComponent = require('./components/layout/ReportBug.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent, 
    ConnectionIcon: ConnectionIconComponent, 
    ListenersIcon: ListenersIconComponent,
    ReportBug: ReportBugComponent
  },
  mounted: function () {
    console.log(`Vue mounted.`)
  },
});