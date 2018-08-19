<template>
    <div class="card">
        <div class="card-image">
            <img v-bind:src="song.imageUrl">
            <span class="card-title card-overtitle">{{song.name}}</span>
            <span class="card-title card-subtitle">{{song.artist}}</span>
        </div>
        <div class="card-content">
            <slot name="progressBar"></slot>
            <div class="row">
                <div class="col s2">{{secondsAndMinutesProgressed}}</div>
                <div class="col s2 offset-s8">{{secondsAndMinuteseMaximum}}</div>
            </div>
            <div class="row">
                <div class="col s12 center-align">
                    <slot name="controlButtons"></slot>
                </div>
            </div>
            <div class="row">
                <div class="col s12 center-align">
                    <slot name="appreciationButtons"></slot>
                </div>
            </div>
            <div class="row">
                <div class="col s12 center-align">
                    <p class="bottom">&copy; {{song.recordLabel}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  module.exports = {
    mounted: function () {
      console.log("Song Playing component mounted.")
    },
    props: {song: Object},
    computed: {
      secondsAndMinutesProgressed: function () {
        return this.toMinutesAndSeconds(this.song.currentProgress)
      },
      secondsAndMinuteseMaximum: function () {
        return this.toMinutesAndSeconds(this.song.maximumProgress)
      }
    },
    methods: {
      toMinutesAndSeconds: function (seconds) {
        return (seconds-(seconds%=60))/60+(9<seconds?':':':0')+seconds;
      }
    }
  }
</script>