<template>
    <div class="card horizontal">
        <div class="card-image">
            <img v-bind:src="song.albumCover">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <div class="row">
                    <div class="col s6">
                        <div class="meta-wrapper">
                            <p>Drake - Hotline Bling</p>
                            <p class="grey-text">Added by Josh Crowe 5 minutes ago</p>
                        </div>
                    </div>
                    <div class="col s6 right-align">
                        <div class="clear-wrapper right-align">
                            <p><i class="material-icons right">clear</i>Rank #22</p>
                        </div>
                        <div class="btn-wrapper">
                            <a class="waves-effect waves-light btn red darken-2">
                                <i class="material-icons left">arrow_downward</i>
                                22k
                            </a>
                            <a class="waves-effect waves-light btn green darken-2">
                                <i class="material-icons right">arrow_upward</i>23k
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
      props: {song: Object}
    }
</script>