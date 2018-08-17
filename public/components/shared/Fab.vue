<template>
    <div class="fixed-action-btn">
        <a v-bind:class="buttonClasses">
            <i v-bind:class="innerClasses">{{term}}</i>
        </a>
        <ul>
            <slot name="FabIcons"></slot>
        </ul>
    </div>
</template>

<script>
    module.exports = {
      props: ['backgroundColor', 'textColor', 'term'],
      computed: {
        buttonClasses: function () {
          return ['btn-floating', 'btn-large', this.backgroundColor]
        },
        innerClasses: function () {
          return ['large', 'material-icons', `${this.textColor}-text`]
        }
      }
    }
</script>