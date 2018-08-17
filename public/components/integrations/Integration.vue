<template id="integration-template">
    <div class="card horizontal queue-item">
        <div class="card-image">
            <img v-bind:src="integration.image">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>{{integration.name}} <i class="material-icons right grey-text">clear</i></p>
                <p class="grey-text">Connected {{connectedDenotation}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  const Twas = require('twas');

  module.exports = {
    template: '#integration-template',
    props: {integration: Object},
    computed: {
      connectedDenotation: function () {
        return Twas(this.integration.connected)
      }
    }
  }
</script>