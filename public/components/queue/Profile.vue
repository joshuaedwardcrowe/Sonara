<template id="profile-template">
    <div id="user">
        <slot name="user"></slot>
        <ul class="collection scrollable">
            <slot name="notifications"></slot>
        </ul>
    </div>
</template>

<script>
    module.exports = {
      template: '#profile-template',
      props: ['avatarUrl', 'backgroundUrl', 'name']
    }
</script>