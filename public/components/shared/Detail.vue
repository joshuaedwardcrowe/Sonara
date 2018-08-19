<template>
    <div class="modal">
        <div class="modal-content grey lighten-3">
            <h4>{{title}}</h4>
            <slot name="content"></slot>
        </div>
        <div class="modal-footer">
            <slot name="buttons"></slot>
        </div>
    </div>
</template>

<script>
    module.exports = {
      mounted: function () {
        const modalElements = document.getElementsByClassName('modal');
        this.uiInstance = M.Modal.init(modalElements[0], {})

        console.log("Detail component mounted.");
      },
      props: {title: String},
      data: () => {
        return {
          uiInstance: null
        }
      },
      methods: {
        open: function () {
          this.uiInstance.open()
        }
      }
    }
</script>