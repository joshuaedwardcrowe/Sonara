<template>
    <div v-bind:class="columnClasses">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
      props: {size: Number, shadowed: Boolean},
      mounted: function () {
        console.log("Page Column component mounted.");
      },
      computed: {
        columnClasses: function () {
          return ['col', `s${this.size}`, this.shadowed ? 'grey lighten-3': '']
        }
      }
    }
</script>