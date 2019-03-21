<template>
    <div id="page" class="row grey  mt-1 lighten-3">
        <slot></slot>
    </div>
</template>

<script>
    const { log } = require('../../javascript/utils');

    module.exports = {
      mounted: () => log('Page', 'Mounted.')
    }
</script>
