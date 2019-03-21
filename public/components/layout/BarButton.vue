<template>
    <li>
        <a v-bind:href="url" class="btn white waves-effect waves-dark btn black-text">
            {{label}} <i class="material-icons right">{{icon}}</i>
        </a>
    </li>
</template>

<script>
    const { log } = require('../../javascript/utils')

    module.exports = {
      props: {url: String, label: String, icon: String},
      mounted: function () {
        log('BarButton', 'Mounted')
      }
    }
</script>
