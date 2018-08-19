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
        floating: {
          type: Boolean,
          default: false
        },
        large: {
          type: Boolean,
          default: false,
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
          default: ''
        },
        textColor: {
          type: String,
          default: 'Black'
        },
        waveColor: {
          type: String,
          default: 'light'
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
        buttonWavesClass: function () {
          return `waves-${this.waveColor}`
        },
        buttonSizeClass: function () {
          return this.large ? 'btn-large' : ''
        },
        buttonFloatClass: function () {
          return this.floating ? 'btn-floating' : ''
        },
        buttonClasses: function () {
          return [
             ...this.standardClasses,
            this.buttonWavesClass,
            this.backgroundColor,
            this.position,
            this.buttonTextClass,
            this.buttonFlatnessClass,
            this.buttonSizeClass,
            this.buttonTooltipClass,
            this.buttonFloatClass
          ]
        },
        buttonPosition: function () {
          return !!this.tooltip ? 'bottom' : ''
        },
        iconClasses: function () {
          return ['material-icons', this.iconPosition, this.buttonTextClass]
        }
      },
      methods: {
        click: function () {
          this.$emit('click');
        }
      }
    }
</script>