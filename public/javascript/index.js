const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');
const Twas = require('twas')

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const ConnectionIconComponent = require('./components/layout/ConnectionIcon.vue');
const ListenersIconComponent = require('./components/layout/ListenersIcon.vue');
const PageComponent = require('./components/layout/Page.vue');
const PageColumnComponent = require('./components/layout/PageColumn.vue');

const ClickerComponent = require('./components/shared/Clicker.vue');
const ListComponent = require('./components/shared/List.vue');
const ProfileComponent = require('./components/user/Profile.vue');
const NotificationComponent = require('./components/user/Notification.vue');
const SongComponent = require('./components/songs/Song.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent,
    Clicker: ClickerComponent,

    ConnectionIcon: ConnectionIconComponent, 
    ListenersIcon: ListenersIconComponent,

    Page: PageComponent,
    PageColumn: PageColumnComponent,
    List: ListComponent,
    Profile: ProfileComponent,
    Notification: NotificationComponent,
    Song: SongComponent
  },
  mounted: function () {
    console.log(`Vue mounted.`)
  },
  data: {
    currentUser: {
      name: 'Joshua Crowe',
      points: 234223,
      imageUrl: 'images/person.png'
    },
    currentSongs: [
      {
        id: "amoamos-ansoaso-ansoaso-amsoamso",
        artist: 'Drake',
        name: "God's Plan"
      }
    ]
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});
