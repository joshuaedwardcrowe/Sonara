<template>
    <div class="progress grey lighten-4">
        <div class="purple darken-4" :style="loaderStyle" :class="{
          indeterminate: !determinate,
          determinate: determinate
        }"></div>
    </div>
</template>

<script type="text/javascript">
  module.exports = {
    mounted: function () {
      console.log("Loader component mounted.")
    },
    props: {progress: Number, determinate: {type: Boolean, default: true}},
    computed: {
      loaderStyle: function () {
        return {width: `${this.progress}%`};
      }
    }
  };
</script>