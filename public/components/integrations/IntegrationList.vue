<template id="integration-list-template">
    <div class="row">
        <div class="col s4">
            <slot name="columnOneContent"></slot>
        </div>
        <div class="col s4">
            <slot name="columnTwoContent"></slot>
        </div>
        <div class="col s4">
            <slot name="columnThreeContent"></slot>
        </div>
    </div>
</template>

<script>
    module.exports = {
      template: '#integration-list-template'
    }
</script>