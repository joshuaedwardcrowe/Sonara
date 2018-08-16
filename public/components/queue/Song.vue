<template id="song-template">
    <div class="card horizontal queue-item">
        <div class="card-image">
            <img v-bind:src="song.albumCover">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>
                    {{song.artist}} - <strong>{{song.name}}</strong>
                    <span class="right">
                        <i class="material-icons right">clear</i>
                        {{song.rating.likes}} Like | {{song.rating.dislikes}} Dislike
                    </span>
                </p>
                <div class="progress grey">
                    <div class="determinate black" v-bind:style="progressStyle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
      template: '#song-template',
      props: {song: Object},
      mounted: function () {
        console.log(`Song: ${this.song}`)
      },
      computed: {
        progressStyle: function () {
          return `width: ${this.song.progress}%`;
        }
      }
    }
</script>