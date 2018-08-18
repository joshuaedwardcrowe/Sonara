<template>
    <li>
        <a>
            <i class="material-icons right">hearing</i>
            {{count}} Listening
        </a>
    </li>
</template>

<script>
    module.exports = {
      props: {count: Number},
      mounted: function () {
        console.log("Listeners Icon component mounted.");
      }
    }
</script>