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

<script>
    const { log } = require('../../javascript/utils');

    module.exports =  {
      mounted: () => log('Bar', 'Mounted.')
    }
</script>
