<template id="page-queue-template">
    <div class="container">
        <div class="row">
            <div class="col s4">
                <page-queue-profile image-url="./images/background.jpg" name="John Smith"></page-queue-profile>
            </div>
            <div class="col s8">RIGHT COLUMN</div>
        </div>
    </div>
</template>

<script>
  const PageQueueProfile = require('./PageQueueProfile');

  module.exports = {
    template: '#page-queue-template',
    components: {PageQueueProfile}
  }
</script>