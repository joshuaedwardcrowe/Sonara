<template id="integration-template">
    <div class="card horizontal queue-item">
        <div class="card-image">
            <img src="images/album.jpg">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>I am a very simple card {{t}}:{{a}}</p>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    </div>
</template>

<script>
  module.exports = {
    template: '#integration-template'
  }
</script>