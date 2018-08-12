<template id="page-queue-profile-notification-template">
    <div id="`user`">
        <div class="card grey darken-3">
            <div class="card-image">
                <img v-bind:src="imageUrl">
                <span class="card-title">{{name}}</span>
            </div>
        </div>
        <ul class="collection scrollable">
            <page-queue-profile-notification
                    v-for="notification in notifications"
                    v-bind:img-url="notification.imageUrl"
                    v-bind:title="notification.title"
                    v-bind:description="notification.description"
                    v-bind:specifics="notification.specifics"
            >

            </page-queue-profile-notification>
        </ul>
    </div>
</template>

<script>
    const PageQueueProfileNotification = require('./PageQueueProfileNotification');

    module.exports = {
      template: '#page-queue-profile-notification-template',
      components: {PageQueueProfileNotification},
      props: ['imageUrl', 'name'],
      data: () => {
        return {
          notifications: [
            {
              imageUrl: './images/person.png',
              title: 'Test Title',
              description: 'Test Description',
              specifics: 'Test Specifics'
            },
            {
              imageUrl: './images/person.png',
              title: 'Test Title',
              description: 'Test Description',
              specifics: null
            }
          ]
        }
      },
      methods: {
        addNotification: function (something) {

        }
      }
    }
</script>