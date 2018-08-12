<template id="profile-user-template">
    <div id="user">
        <ul id="user-box" class="collection">
            <li class="collection-item avatar">
                <img v-bind:src="user.avatarUrl" alt="" class="circle">
                <span class="title">{{user.name}}</span>
                <p>{{user.points}}</p>
            </li>
        </ul>
        <hr id="user-rule" />
    </div>
</template>

<script>
    module.exports = {
      template: '#profile-user-template',
      props: {user: Object}
    }
</script>