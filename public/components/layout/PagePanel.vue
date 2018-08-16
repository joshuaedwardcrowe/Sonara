<template id="page-panel-template">
    <div class="container">
        <div class="row">
            <div v-bind:class="leftColumn" v-if="multipleColumns">
                <slot name="leftColumnContent"></slot>
            </div>
            <div v-bind:class="rightColumn" v-if="multipleColumns">
                <slot name="rightColumnContent"></slot>
                RIGHT COLUMN
            </div>
            <div class="col s12" v-else>
                <slot name="singleColumnContent"></slot>
                SINGLE COLUMN
            </div>
        </div>
    </div>
</template>

<script>
  module.exports = {
    template: '#page-panel-template',
    props: {
      multipleColumns: {
        type: Boolean,
        default: false
      },
      leftColumnSize: Number,
      rightColumnSize: Number
    },
    computed: {
      leftColumn: function () {
        return `col s${this.leftColumnSize}`;
      },
      rightColumn: function () {
        return `col s${this.rightColumnSize}`
      }
    }
  }
</script>