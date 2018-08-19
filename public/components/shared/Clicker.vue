<template>
    <a v-bind:class="buttonClasses" v-on:click="click"
       v-bind:data-position="buttonPosition" v-bind:data-tooltip="tooltip">
        {{label}} <i v-bind:class="iconClasses">{{iconName}}</i>
    </a>
</template>

<script>
    module.exports = {
      mounted: function () {
        console.log("Clicker component mounted.")
      },
      props: {
        flat: {
          type: Boolean,
          default: false
        },
        label: {
          type: String,
          default: ''
        },
        tooltip: {
          type: String
        },
        position: {
          type: String,
          default: 'center'
        },
        iconName: {
          type: String
        },
        iconPosition: {
          type: String,
          default: 'center'
        },
        textColor: {
          type: String,
          default: 'Black'
        },
        backgroundColor: {
          type: String,
          default: 'white'
        }
      },
      data: () => {
        return {
            standardClasses: ['waves-effect', 'waves-dark']
          }
      },
      computed: {
        buttonFlatnessClass: function () {
          return this.flat ? 'btn-flat' : 'btn'
        },
        buttonTooltipClass: function () {
          return !!this.tooltip ? 'tooltipped' : ''
        },
        buttonTextClass: function () {
          return `${this.textColor}-text`
        },
        buttonClasses: function () {
          return [
             ...this.standardClasses,
            this.backgroundColor,
            this.position,
            this.buttonTextClass,
            this.buttonFlatnessClass,
            this.buttonTooltipClass
          ]
        },
        buttonPosition: function () {
          return !!this.tooltip ? 'bottom' : ''
        },
        iconClasses: function () {
          return ['material-icons', this.iconPosition]
        }
      },
      methods: {
        click: function () {
          this.$emit('click');
        }
      }
    }
</script>