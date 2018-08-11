<template id="page-template">
    <div id="page">
        <div id="page-topshelf" class="row">
            <div class="col s4 offset-s2">
                <ul id="tabs" class="tabs grey darken-4">
                    <li class="tab col s3"><a href="#queuePanel">Queue</a></li>
                    <li class="tab col s4"><a href="#historyPanel">History</a></li>
                    <li class="tab col s3"><a href="#devicePanel">Device</a></li>
                </ul>
            </div>
        </div>
        <div id="page-content" class="row">
            <div id="queuePanel" class="col s12">
                <page-queue></page-queue>
            </div>
            <div id="historyPanel" class="col s12">
                <page-history></page-history>
            </div>
            <div id="devicePanel" class="col s12">
                <page-device></page-device>
            </div>
        </div>
    </div>
</template>

<script>
    const PageQueue = require('./PageQueue.vue');
    const PageHistory = require('./PageHistory.vue');
    const PageDevice = require('./PageDevice.vue');

    module.exports = {
      template: '#page-template',
      components: {PageQueue, PageHistory, PageDevice}
    }
</script>