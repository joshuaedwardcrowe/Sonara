const Vue = require('vue');

const squadronApp = new Vue({
    el: '#squadron-app'
});

function getChildElementByClassName($parentElement, childClassName) {
  const $childElementPossibilities = $parentElement.getElementsByClassName(childClassName)
  return $childElementPossibilities[0];
}

function establishMenuAndSideNav(menuId, sideNavId, options) {
  const $menuTrigger = document.getElementById(menuId);
  const $menu = document.getElementById(sideNavId);
  const SideNav = M.Sidenav.init($menu, options)
  
  $menuTrigger.onclick = function (clickEvent) {
    return SideNav.isOpen ? SideNav.close() : SideNav.open();
  }
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
  
  establishMenuAndSideNav('menu', 'slide-out', {edge: 'right', draggable: true})
  establishOverviewTabs('page-topshelf', {})
  establishStatusButton('status', {})
    
  console.log("Loaded.")

});
