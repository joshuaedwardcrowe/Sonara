const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const Twas = require('twas')

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const ConnectionIconComponent = require('./components/layout/ConnectionIcon.vue');
const ListenersIconComponent = require('./components/layout/ListenersIcon.vue');
const ReportBugComponent = require('./components/layout/ReportBug.vue');
const PageComponent = require('./components/layout/Page.vue');
const PageColumnComponent = require('./components/layout/PageColumn.vue');

const NotificationListComponent = require('./components/user/NotificationList.vue');
const NotificationComponent = require('./components/user/Notification.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent, 
    ConnectionIcon: ConnectionIconComponent, 
    ListenersIcon: ListenersIconComponent,
    ReportBug: ReportBugComponent,
    Page: PageComponent,
    PageColumn: PageColumnComponent,

    NotificationList: NotificationListComponent,
    Notification: NotificationComponent
  },
  mounted: function () {
    console.log(`Vue mounted.`)
  },
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});
