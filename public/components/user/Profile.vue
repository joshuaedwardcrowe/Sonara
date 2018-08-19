<template>
    <ul class="collection">
        <li class="collection-item avatar profile mh-0 transparent">
            <img v-bind:src="user.imageUrl" class="circle">
            <span class="title">J{{user.name}}</span>
            <p class="grey-text">{{pointsDenotation}} Points</p>
        </li>
    </ul>
</template>

<script>
  module.exports = {
    props: {user: Object},
    mounted: function () {
      console.log("Profile component mounted.")
    },
    computed: {
      pointsDenotation: function () {
        const pointsString = this.user.points.toString();
        return pointsString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  }
</script>