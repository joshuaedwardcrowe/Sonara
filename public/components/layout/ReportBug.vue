<template>
    <li>
        <a v-bind:href="reportUrl" class="btn white black-text">
            Report a Bug <i class="material-icons right">bug_report</i>
        </a>
    </li>
</template>

<script>
    module.exports = {
      props: {reportUrl: String},
      mounted: function () {
        console.log("Report Bug component mounted")
      }
    }
</script>

<style scoped>

</style>