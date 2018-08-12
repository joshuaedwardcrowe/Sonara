<template id="page-queue-profile-notification-template">
    <li class="collection-item avatar">
        <img v-bind:src="imgUrl" alt="" class="circle">
        <span class="title">{{title}}</span>
        <p>
            {{description}}
            <span v-if="secondLine">
                <br /> {{specifics}}
            </span>
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons grey-text">arrow_forward</i></a>
    </li>
</template>

<script>
    module.exports = {
      template: '#page-queue-profile-notification-template',
      props: ['imgUrl', 'title', 'description', 'specifics'],
      computed: {
        secondLine: function () { return !!this.specifics }
      }
    }
</script>