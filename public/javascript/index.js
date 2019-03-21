const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const {log} = require('./utils');

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('../components/layout/Bar.vue');
const BarButtonComponent = require('../components/layout/BarButton.vue');
const ConnectionIconComponent = require('../components/layout/ConnectionIcon.vue');
const ListenersIconComponent = require('../components/layout/ListenersIcon.vue');
const PageComponent = require('../components/layout/Page.vue');
const PageColumnComponent = require('../components/layout/PageColumn.vue');

const NotificationListComponent = require('../components/user/NotificationList.vue');
const NotificationComponent = require('../components/user/Notification.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent,
    BarButton: BarButtonComponent,

    ConnectionIcon: ConnectionIconComponent,
    ListenersIcon: ListenersIconComponent,

    Page: PageComponent,
    PageColumn: PageColumnComponent,

    NotificationList: NotificationListComponent,
    Notification: NotificationComponent
  },
  mounted: function () {
    log('App', 'mounted.')
  },
});



document.addEventListener('DOMContentLoaded', function() {
  log('DOM', 'Loaded.')

  const elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems, {});

  log('Theme', 'Tooltips initialised.')
});
