<script setup>
</script>
<template>
  
  <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 active" aria-current="page">Главная</router-link></li>
        <li class="nav-item"><router-link to="/candleChart" class="nav-link px-2 active" aria-current="page">Свечи акций на МосБирже</router-link></li>
        <li class="nav-item"><a href="https://github.com/matteoxpo/web_labs_gw" target="_blank" class="nav-link px-2">Git</a></li>
        <li class="nav-item"><a href="https://t.me/xpomin" target="_blank" class="nav-link px-2">TG Хромин</a></li>
        <li class="nav-item"><a href="https://t.me/a_sind" target="_blank" class="nav-link px-2">TG Кашаев</a></li>
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
    background-color: #1c1e1f;
  }
  .wrapper nav a {
    color: #e7bebe;
    font-weight: 500;
  }
  .wrapper nav a:hover {
    color: #f04e4e;
  }


</style>

<script>

export default {
  data() {
    return {

    };
  },

  methods: {
    
  }
};
</script>