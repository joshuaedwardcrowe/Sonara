<template>
    <div class="fixed-action-btn">
        <slot name="FABLargeIcon"></slot>
        <ul>
            <slot name="FABSmallIcons"></slot>
            <li><a class="btn-floating red darken-3"><i class="material-icons">radio_button_unchecked</i></a></li>
        </ul>
    </div>
</template>

<script>
    module.exports = {}
</script>