<template>
    <div class="navbar-fixed grey darken-4">
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                    <img src="./images/headphones.png" />
                    <p>Sonara</p>
                </a>
                <ul class="right hide-on-med-and-down">
                    <li><a><i class="material-icons left">assignment_ind</i>{{peopleCount}}</a></li>
                    <li><a><i class="material-icons left">{{connectionIcon}}</i>{{connectionStatus}}</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script type="text/javascript">
    module.exports =  {}
</script>