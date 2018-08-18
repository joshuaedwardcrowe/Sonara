<template>
    <div id="page">
        <div class="row">
            <div class="col s3">
                <h4>You</h4>
                <slot name="userInteractionColumn"></slot>
            </div>
            <div class="col s6">
                <h4>Queue</h4>
                <slot name="songQueueColumn"></slot>
            </div>
            <div class="col s3">
                <h4>Playing</h4>
                <slot name="songOverviewColumn"></slot>
            </div>
        </div>
        <slot name="wholePageContent"></slot>
    </div>
</template>

<script>
    module.exports = {}
</script>