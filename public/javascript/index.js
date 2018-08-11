const Vue = require('vue/dist/vue.js');
const Vuegister = require('vuegister');

// Handles single-file component registry
Vuegister.register();

const HeaderBar = require('./components/HeaderBar.vue');

window.SonaraApp = new Vue({
  el: '#sonara-app',
  components: {HeaderBar}
});

function getChildElementByClassName($parentElement, childClassName) {
  const $childElementPossibilities = $parentElement.getElementsByClassName(childClassName)
  return $childElementPossibilities[0];
}

function establishOverviewTabs(tabsContainerId, options) {
  const $tabsContainer = document.getElementById(tabsContainerId)
  const $tabsList = getChildElementByClassName($tabsContainer, 'tabs')
  const tabItemsCollection = $tabsList.getElementsByClassName('tab')
  const tabItems = [].slice.call(tabItemsCollection)

  tabItems.forEach($tabItem => $tabItem.onclick = (e) => e.preventDefault())

  const Tabs = M.Tabs.init($tabsList, options)
  Tabs.select(tabItems[0].id)
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
