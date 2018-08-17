const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/Bar.vue');
const PageComponent = require('./components/layout/Page.vue');
const PagePanelComponent = require('./components/layout/PagePanel.vue');
const SongComponent = require('./components/shared/Song.vue');
const FabComponent = require('./components/shared/Fab.vue');
const FabIconComponent = require('./components/shared/FabIcon.vue');
const ProfileComponent = require('./components/queue/Profile.vue');
const ProfileUserComponent = require('./components/queue/ProfileUser.vue');
const ProfileNotificationComponent = require('./components/queue/ProfileNotification.vue');
const IntegrationListComponent = require('./components/integrations/IntegrationList.vue');
const IntegrationDetailComponent = require('./components/integrations/IntegrationDetail.vue');
const IntegrationComponent = require('./components/integrations/Integration.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent,
    Page: PageComponent,
    PagePanel: PagePanelComponent,
    Song: SongComponent,
    Fab: FabComponent,
    FabIcon: FabIconComponent,
    Profile: ProfileComponent,
    ProfileUser: ProfileUserComponent,
    ProfileNotification: ProfileNotificationComponent,
    IntegrationList: IntegrationListComponent,
    IntegrationDetail: IntegrationDetailComponent,
    Integration: IntegrationComponent
  },
  mounted: function () {
    establishOverviewTabs();
    establishStatusButton();

    console.log("Loaded.")
  },
  data: {
    currentUser: {
      avatarUrl: './images/person.png',
      name: 'John Smith',
      points: 2000
    },
    currentNotifications: [
      {
        id: 1,
        icon: 'arrow_forward',
        description: 'Rewarded 20 Points',
        user: {
          avatarUrl: './images/person.png',
          name: 'John Smith',
          points: 2000
        }
      },
      {
        id: 2,
        icon: 'arrow_forward',
        description: 'Played a Song',
        specifics: 'The Shadows - Foot Tapper',
        user: {
          avatarUrl: './images/person.png',
          name: 'John Smith',
          points: 2000
        }
      }
    ],
    currentSongs: [
      {
        id: 1,
        artist: 'Drake',
        name: 'In My Feelings',
        rating: {
          likes: 223,
          dislikes: 1
        },
        progress: 100,
        albumCover: './images/album.jpg'
      },
      {
        id: 2,
        artist: 'Drake',
        name: 'Hotline Bling',
        rating: {
          likes: 223,
          dislikes: 1
        },
        progress: 44,
        albumCover: './images/album.jpg'
      },
      {
        id: 3,
        artist: 'Drake',
        name: 'Controlla',
        rating: {
          likes: 223,
          dislikes: 1
        },
        progress: 21,
        albumCover: './images/album.jpg'
      }
    ],
    currentIntegrations: [
      {
        id: 1,
        image: './images/spotify.png',
        name: 'Spotify',
        connected: new Date()
      }
    ],
    currentDevices: []
  },
  computed: {
    chunkedIntegrations: function () {
      const chunkedIntegrations = [];
      let chunkIndex = 0;

      while (chunkIndex < this.currentIntegrations.length) {
        chunkedIntegrations.push(this.currentIntegrations.slice(chunkIndex, chunkIndex += 3))
      }

      return chunkedIntegrations;
    }
  }
});

function getChildElementByClassName($parentElement, childClassName) {
  const $childElementPossibilities = $parentElement.getElementsByClassName(childClassName)
  return $childElementPossibilities[0];
}

function establishOverviewTabs() {
  const $tabsContainer = document.getElementById('page-topshelf')
  const $tabsList = getChildElementByClassName($tabsContainer, 'tabs');
  const tabItemsCollection = $tabsList.getElementsByClassName('tab');
  const tabItems = [].slice.call(tabItemsCollection);
  const tabAnchorsCollection = $tabsList.getElementsByTagName('a');
  const tabAnchors = [].slice.call(tabAnchorsCollection);

  tabItems.forEach($tabItem => $tabItem.onclick = (e) => e.preventDefault());

  window.Tabs = M.Tabs.init($tabsList, {});
  const Reference = tabAnchors[2].href;
  const Id = Reference.substring(Reference.indexOf("#") + 1, Reference.length);

  Tabs.select(Id);
  Tabs.updateTabIndicator();
}

function establishStatusButton() {
  const $buttonContainer = Array.from(document.getElementsByClassName('fixed-action-btn'));
  const FloatingActionButton = $buttonContainer.map(x => M.FloatingActionButton.init(x, {}));
}