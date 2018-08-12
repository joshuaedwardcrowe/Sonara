<template id="profile-template">
    <div id="`user`">
        <div class="card grey darken-3">
            <div class="card-image">
                <img v-bind:src="imageUrl">
                <span class="card-title">{{name}}</span>
            </div>
        </div>
        <ul class="collection scrollable">
            NOTIFICATIONS GO HERE
        </ul>
    </div>
</template>

<script>
    module.exports = {
      template: '#profile-template',
      props: ['imageUrl', 'name'],
      mounted: function () {
        console.log(`Image URL is: ${this.imageUrl}`);
      }
    }
</script>