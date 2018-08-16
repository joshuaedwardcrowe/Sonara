<template id="profile-notification">
    <li class="collection-item avatar grey darken-4">
        <img v-bind:src="notification.user.avatarUrl" alt="" class="circle">
        <span class="title white-text">{{notification.user.name}}</span>
        <p class="white-text">
            {{notification.description}}
            <span v-if="secondLine">
                <br /> {{notification.specifics}}
            </span>
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons grey-text">{{notification.icon}}</i></a>
    </li>
</template>

<script>
    module.exports = {
      template: '#profile-notification',
      props: {notification: Object},
      computed: {
        secondLine: function () { return !!this.notification.specifics }
      }
    }
</script>