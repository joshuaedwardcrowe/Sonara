const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');

// Handles single-file component registry
Vuegister.register();

const BarComponent = require('./components/layout/BarComponent.vue');
const PageComponent = require('./components/layout/Page.vue');
const PagePanelComponent = require('./components/layout/PagePanel.vue');
const SongComponent = require('./components/shared/Song.vue');
const FABComponent = require('./components/shared/FAB.vue');
const FABLargeIconComponent = require('./components/shared/FABLargeIcon.vue');
const FABSmallIconComponent = require('./components/shared/FABSmallIcon.vue');
const ProfileComponent = require('./components/queue/Profile.vue');
const ProfileUserComponent = require('./components/queue/ProfileUser.vue');
const ProfileNotificationComponent = require('./components/queue/ProfileNotification.vue');
const IntegrationListComponent = require('./components/integrations/IntegrationList.vue');
const IntegrationComponent = require('./components/integrations/Integration.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {
    Bar: BarComponent, PageComponent, PagePanelComponent,
    SongComponent, FABComponent, FABLargeIconComponent, FABSmallIconComponent,
    ProfileComponent, ProfileUserComponent, ProfileNotificationComponent,
    IntegrationListComponent, IntegrationComponent
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
    currentIntegrations: [],
    currentDevices: []
  }
});

function getChildElementByClassName($parentElement, childClassName) {
  const $childElementPossibilities = $parentElement.getElementsByClassName(childClassName)
  return $childElementPossibilities[0];
}

function establishOverviewTabs(tabsContainerId, options) {
  const $tabsContainer = document.getElementById(tabsContainerId)
  const $tabsList = getChildElementByClassName($tabsContainer, 'tabs');
  const tabItemsCollection = $tabsList.getElementsByClassName('tab');
  const tabItems = [].slice.call(tabItemsCollection);
  const tabAnchorsCollection = $tabsList.getElementsByTagName('a');
  const tabAnchors = [].slice.call(tabAnchorsCollection);

  tabItems.forEach($tabItem => $tabItem.onclick = (e) => e.preventDefault());

  window.Tabs = M.Tabs.init($tabsList, options);
  const Reference = tabAnchors[2].href;
  const Id = Reference.substring(Reference.indexOf("#") + 1, Reference.length);

  Tabs.select(Id);
  Tabs.updateTabIndicator();
}

function establishStatusButton(buttonId, options) {
  const $buttonContainer = document.getElementById(buttonId)
  const FloatingActionButton = M.FloatingActionButton.init($buttonContainer, options);
}

document.addEventListener('DOMContentLoaded', function () {

  establishOverviewTabs('page-topshelf', {})
  establishStatusButton('status', {})

  console.log("Loaded.")

});
