<script setup>
</script>
<template>
  <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><a href="#" target="_blank" class="nav-link px-2">Git</a></li>
        <li class="nav-item"><a href="https://t.me/xpomin" target="_blank" class="nav-link px-2">Tg</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #dropdownUser2 {
    min-width: 40px;
  }
  nav .dropdown .dropdown-menu {
    margin-left: -85px !important;
  }
  .wrapper .fixed-top {
    position: sticky;
    z-index: 2100;
  }
  .wrapper nav {
    background-color: rgba(0,0,0,.8);
  }
  .wrapper nav a {
    color: #e1bee7;
    font-weight: 500;
  }
  .wrapper nav a:hover {
    color: #f0ad4e;
  }
  nav .dropdown-menu a {
    color: #222;
  }
  nav .dropdown-menu a:hover {
    color: #555;
  }

  nav .bg-primary {
    --bs-primary-rgb: 255,190,231;
    --bs-bg-opacity: .9;
    color: #0B212B;
  }

</style>

<script>
import { mapState} from 'pinia'

export default {
  data() {
    return {

    };
  },

  methods: {
    
  }
};
</script>