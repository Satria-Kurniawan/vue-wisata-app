<template>
  <div class="container">
    <Header
      :pageTitle="
        $route.name == 'home'
          ? 'Home page'
          : '' || $route.name == 'about'
          ? 'About page'
          : '' || $route.name == 'admin'
          ? 'Admin page'
          : ''
      "
    />
    <router-view />
  </div>
</template>

<script>
import "bootstrap"
import Header from "./components/header/Header.vue"

export default {
  name: "App",
  components: {
    Header,
  },
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600;700;800;900&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
}
body {
  padding-top: 80px;
  scroll-behavior: smooth;
}
</style>
