<template>
    <li>
        <a>
            <i class="material-icons right">hearing</i>
            {{count}} Listening
        </a>
    </li>
</template>

<script>
    const { log } = require('../../javascript/utils');

    module.exports = {
      props: {count: Number},
      mounted: () => log('ListenersIcon', 'Mounted.')
    }
</script>
