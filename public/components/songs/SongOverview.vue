<template>
    <div class="row">
        <div class="col s4">
            <slot name="song"></slot>
        </div>
        <div class="col s8">
            <slot name="details"></slot>
        </div>
    </div>
</template>

<script>
    module.exports = {
      mounted: function () {
        console.log("Song Overview component mounted.")
      }
    }
</script>