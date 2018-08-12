<template id="profile-notification">
    <li class="collection-item avatar">
        <img v-bind:src="imgUrl" alt="" class="circle">
        <span class="title">{{title}}</span>
        <p>
            {{description}}
            <span v-if="secondLine">
                <br /> {{specifics}}
            </span>
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons grey-text">{{icon}}</i></a>
    </li>
</template>

<script>
    module.exports = {
      template: '#profile-notification',
      props: ['imgUrl', 'icon', 'title', 'description', 'specifics'],
      computed: {
        secondLine: function () { return !!this.specifics }
      }
    }
</script>