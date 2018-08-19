<template>
    <li class="collection-item avatar song mh-0 br-5 bs">
        <p>#{{queuePosition}}</p>
        <p>{{song.artist}} - {{song.name}}</p>
        <slot></slot>
    </li>
</template>

<script>
    module.exports = {
      mounted: function () {
        console.log("Song component mounted.")
      },
      props: {
        index: Number,
        song: Object
      },
      computed: {
        queuePosition: function () {
          return this.index + 1;
        }
      }
    }
</script>