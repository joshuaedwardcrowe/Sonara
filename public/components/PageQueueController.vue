<template id="page-queue-controller-template">
    <div id="`user`">
        <div class="card grey darken-3">
            <div class="card-image">
                <img v-bind:src="userImageUrl">
                <span class="card-title">{{userName}}</span>
            </div>
        </div>
        <ul class="collection scrollable">
            <page-queue-controller-notification></page-queue-controller-notification>
        </ul>
    </div>
</template>

<script>
    const PageQueueControllerNotification = require('./PageQueueControllerNotification');

    module.exports = {
      template: '#page-queue-controller-template',
      components: {PageQueueControllerNotification},
      props: ['userImageUrl', 'userName']
      data: () => {
        notifications: []
      },
      methods: {
        addNotification: function (something) {

        }
      }
    }
</script>