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
const DetailComponent = require('./components/shared/Detail.vue');
const LoaderComponent = require('./components/shared/Loader.vue');
const ProfileComponent = require('./components/user/Profile.vue');
const NotificationComponent = require('./components/user/Notification.vue');
const SongComponent = require('./components/songs/Song.vue');
const SongOverviewComponent = require('./components/songs/SongOverview.vue');
const SongPlayingComponent = require('./components/songs/SongPlaying.vue');

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
    Detail: DetailComponent,
    Loader: LoaderComponent,
    Profile: ProfileComponent,
    Notification: NotificationComponent,
    Song: SongComponent,
    SongOverview: SongOverviewComponent,
    SongPlaying: SongPlayingComponent
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
        name: "God's Plan",
        songUrl: 'https://google.com',
        recordLabel: 'Something Records',
        imageUrl: 'images/album.jpg',
        currentProgress: 80,
        maximumProgress: 225
      }
    ],
    playingSong: {}
  },
  watch: {
    playingSong: function (value) {
      this.$refs.songLoader.determinate = true
    }
  },
  computed: {
    playingSongProgress: function () {
      return (this.playingSong.currentProgress / this.playingSong.maximumProgress) * 100
    }
  },
  methods: {
    openDetailModal: function () {
      this.$refs.detailModal.open()
    },
    getNumberDenotation: function (number) {
      const numberString = number.toString();
      return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
});

SonaraApp.playingSong = SonaraApp.currentSongs[0];


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});
