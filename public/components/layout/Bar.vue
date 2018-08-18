<template>
    <div class="navbar-fixed">
        <nav class="purple darken-4">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                    <img src="./images/headphones.png" />
                    <p>Sonara</p>
                </a>
                <ul class="right">
                    <slot></slot>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script type="text/javascript">
    module.exports =  {
      mounted: function () {
        console.log("Bar component mounted.");
      }
    }
</script>