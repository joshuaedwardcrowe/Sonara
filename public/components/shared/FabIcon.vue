<template>
    <li>
        <a v-bind:class="anchorClasses">
            <i v-bind:class="iconClasses">{{term}}</i>
        </a>
    </li>
</template>

<script>
    module.exports = {
      props: ['backgroundColor', 'textColor', 'term'],
      computed: {
        anchorClasses: function () {
          return ['btn-floating', this.backgroundColor, 'darken-3']
        },
        iconClasses: function () {
          return ['material-icons', `${this.textColor}-text`]
        }
      }
    }
</script>