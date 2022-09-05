<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Toolbar from "./components/Toolbar.vue";
import About from "./components/About.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Toolbar></Toolbar>
    </div> 
  </header>
  <div class="about">
    <About></About>
  </div>
</template>

<style scoped>
.about{
  margin-top: 0px;
  min-height: 500px;
  height: 800;
}
.wrapper {
  line-height: 1.5;
  max-height: 100vh;
  text-align: right;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    justify-content: right;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
