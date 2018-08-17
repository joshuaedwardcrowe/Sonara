<template id="integration-template">
    <div class="card horizontal queue-item">
        <div class="card-image">
            <img v-bind:src="integration.image">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>{{integration.name}}</p>
                <p>Connected at {{integration.connected}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  module.exports = {
    template: '#integration-template',
    props: {integration: Object}
  }
</script>