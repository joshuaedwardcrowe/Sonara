<template id="queued-template">
    <div class="card horizontal queue-item">
        <div class="card-image">
            <img src="./images/album.jpg">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <a class="btn-floating waves-effect waves-light red right"><i class="material-icons">arrow_forward</i></a>
                <a class="btn-floating waves-effect waves-light green right"><i class="material-icons">arrow_forward</i></a
                <p>Drake - <strong>In My Feelings</strong></p>
                <div class="progress grey">
                    <div class="determinate black" style="width: 70%"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
      template: '#queued-template'
    }
</script>