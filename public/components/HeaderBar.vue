<template id="header-bar">
    <div class="navbar-fixed grey darken-4">
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                    <img src="images/headphones.png" />
                    <p>Sonara</p>
                </a>
                <ul class="right hide-on-med-and-down">
                    <li><a><i class="material-icons left">notifications</i>11</a></li>
                    <li><a><i class="material-icons left">signal_cellular_4_bar</i>Connected</a></li>
                    <li><a id="menu"><i class="material-icons right">menu</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    module.exports = {
      name: 'HeaderBar'
    }
</script>