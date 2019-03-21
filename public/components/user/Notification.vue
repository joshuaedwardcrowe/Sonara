<template>
    <li class="collection-item avatar mh-0 br-5 bs">
        <img src="images/person.png" alt="" class="circle">
        <span class="title">John Smith</span>
        <p class="grey-text">Added a Song</p>
    </li>
</template>

<script>
    const { log } = require('../../javascript/utils');

    module.exports = {
      mounted: () => log('Notification', 'Mounted.')
    }
</script>
