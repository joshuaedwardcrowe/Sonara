<template>
    <ul class="collection">
        <slot></slot>
    </ul>
</template>

<script>
    module.exports = {
      mounted: function () {
        console.log("List component mounted.")
      }
    }
</script>

<style scoped>

</style>