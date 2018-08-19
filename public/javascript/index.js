const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const Twas = require('twas')

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const BarButtonComponent = require('./components/layout/BarButton.vue');
const ConnectionIconComponent = require('./components/layout/ConnectionIcon.vue');
const ListenersIconComponent = require('./components/layout/ListenersIcon.vue');
const PageComponent = require('./components/layout/Page.vue');
const PageColumnComponent = require('./components/layout/PageColumn.vue');

const ProfileComponent = require('./components/user/Profile.vue');
const NotificationListComponent = require('./components/user/NotificationList.vue');
const NotificationComponent = require('./components/user/Notification.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent,
    BarButton: BarButtonComponent,

    ConnectionIcon: ConnectionIconComponent, 
    ListenersIcon: ListenersIconComponent,

    Page: PageComponent,
    PageColumn: PageColumnComponent,

    Profile: ProfileComponent,
    NotificationList: NotificationListComponent,
    Notification: NotificationComponent
  },
  mounted: function () {
    console.log(`Vue mounted.`)
  },
  data: {
    currentUser: {
      name: 'Joshua Crowe',
      points: 234223,
      imageUrl: 'images/person.png'
    }
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});
