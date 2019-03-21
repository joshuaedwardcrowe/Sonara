<template>
    <ul class="collection">
        <slot></slot>
    </ul>
</template>

<script>
    const { log } = require('../../javascript/utils');

    module.exports = {
      mounted: () => log('NotificationList', 'Mounted.')
    }
</script>
