<template id="page-template">
    <div id="page">
        <div id="page-topshelf" class="row">
            <div class="col s4 offset-s2">
                <ul id="tabs" class="tabs grey darken-4">
                    <li class="tab col s3">
                        <a href="#panelOne">
                            <slot name="panelOneName"></slot>
                        </a>
                    </li>
                    <li class="tab col s4">
                        <a href="#panelTwo">
                            <slot name="panelTwoName"></slot>
                        </a>
                    </li>
                    <li class="tab col s3">
                        <a href="#panelThree">
                            <slot name="panelThreeName"></slot>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="page-content" class="row">
            <div id="panelOne" class="col s12">
                 <slot name="panelOneContent"></slot>
            </div>
            <div id="panelTwo" class="col s12">
                <slot name="panelTwoContent"></slot>
            </div>
            <div id="panelThree" class="col s12">
                <slot name="panelThreeContent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
      template: '#page-template'
    }
</script>