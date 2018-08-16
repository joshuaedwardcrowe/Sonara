<template id="queued-template">
    <div class="card horizontal queue-item">
        <div class="card-image">
            <img v-bind:src="track.albumCover">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>
                    {{track.artist}} - <strong>{{track.name}}</strong>
                    <span class="right">
                        <i class="material-icons right">clear</i>
                        {{track.rating.likes}} Like | {{track.rating.dislikes}} Dislike
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
      template: '#queued-template',
      props: {track: Object},
      computed: {
        progressStyle: function () {
          return `width: ${this.track.progress}%`;
        }
      }
    }
</script>