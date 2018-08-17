<template>
    <div>
        <div class="row">
            <div class="col s3">
                <slot name="userInteractionColumn"></slot>
            </div>
            <div class="col s6">
                <slot name="songQueueColumn"></slot>
            </div>
            <div class="col s3">
                <slot name="songOverviewColumn"></slot>
            </div>
        </div>
        <slot name="wholePageContent"></slot>
    </div>
</template>

<script>
    module.exports = {}
</script>