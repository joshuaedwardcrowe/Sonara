<template id="page-queue-template">
    <div class="container">
        <div class="row">
            <div class="col s4">
                <page-queue-controller></page-queue-controller>
            </div>
            <div class="col s8">RIGHT COLUMN</div>
        </div>
    </div>
</template>

<script>
  const PageQueueController = require('./PageQueueController');

  module.exports = {
    template: '#page-queue-template',
    components: {PageQueueController}
  }
</script>