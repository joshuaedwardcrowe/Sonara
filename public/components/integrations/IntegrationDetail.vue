<template>
    <div id="modal-example" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>{{integration.name}}</h4>
            <p>Connected {{connectedDenotation}}</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
</template>

<script>
    const Twas = require('twas');

    module.exports = {
      props: {integration: Object},
      computed: {
        connectedDenotation: function () {
          return Twas(this.integration.connected)
        }
      }
    }
</script>