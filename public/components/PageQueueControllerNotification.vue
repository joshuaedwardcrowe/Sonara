<template id="page-queue-controller-notification-template">
    <li class="collection-item avatar">
        <img v-bind:src="imgUrl" alt="" >
        <span class="title">{{title}}</span>
        <p>{{description}}</p>
        <a href="#!" class="secondary-content"><i class="material-icons grey-text">arrow_forward</i></a>
    </li>
</template>

<script>
    module.exports = {
      template: '#page-queue-controller-notification-template',
      props: ['imgUrl', 'title', 'description', ]
    }
</script>