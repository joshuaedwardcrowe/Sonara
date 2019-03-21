<template>
    <div v-bind:class="columnClasses">
        <slot></slot>
    </div>
</template>

<script>
    const { log } = require('../../javascript/utils');

    module.exports = {
      props: {size: Number},
      mounted: () => log('PageColumn', 'Mounted'),
      computed: {
        columnClasses: function () {
          return ['col', `s${this.size}`]
        }
      }
    }
</script>
