<template id="bar-template">
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
    module.exports = {
      template: '#bar-template',
      props: ['peopleCount', 'connectionStatus'],
      computed: {
        connectionIcon: function () {
          switch (this.connectionStatus) {
            case 'Connected': return 'signal_cellular_4_bar';
            case 'Problematic': return 'signal_cellular_connected_no_internet_4_bar';
            default: return 'signal_cellular_null';
          }
        }
      }
    }
</script>