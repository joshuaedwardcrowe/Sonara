<template>
    <div v-bind:class="columnClasses">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
      props: {size: Number},
      mounted: function () {
        console.log("Page Column component mounted.");
      },
      computed: {
        columnClasses: function () {
          return ['col', `s${this.size}`]
        }
      }
    }
</script>