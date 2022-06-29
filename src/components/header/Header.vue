<template>
  <nav class="navbar navbar-expand-lg bg-white fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex">
        <img src="../../assets/logo.png" alt="brand" width="50" />
        <h4 class="mt-2 ms-3 brand-first">Bali</h4>
        <h4 class="mt-2 ms-2 brand-last">Island</h4>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'home' ? 'active' : ''"
              to="/home"
              >Home</router-link
            >
          </li>
          <li v-if="$route.name == 'landing'" class="nav-item">
            <div class="nav-link">
              <a
                href="#informations"
                style="text-decoration: none; color: gray"
              >
                Informations
              </a>
            </div>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              :class="$route.name == 'about' ? 'active' : ''"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin"
              :class="$route.name == 'admin' ? 'active' : ''"
              >Admin</router-link
            >
          </li>
          <li class="nav-item">
            <Button
              @click="$router.push('/')"
              :text="'Sign Up'"
              class="nav-link btn-secondary px-3"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <h4>{{ pageTitle }}</h4>
</template>

<script>
import Button from "../button/Button.vue"

export default {
  name: "Header",
  props: {
    pageTitle: String,
  },
  components: {
    Button,
  },
}
</script>

<style>
.brand-first {
  font-weight: bold;
  color: rgb(0, 153, 255);
}
.brand-last {
  font-weight: bold;
  color: rgb(255, 0, 200);
}
.active {
  border-bottom: 3px solid rgb(0, 153, 255);
  border-radius: 3px;
}
nav {
  border-bottom: 1px solid rgb(223, 223, 223);
}
.nav-link:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
.navbar-nav > li {
  margin-left: 20px;
}
.nav-item .btn-secondary {
  border-radius: 20px;
  background: rgb(255, 0, 200);
  color: white;
  border: none;
}
.nav-item .btn-secondary:hover {
  background: rgb(0, 153, 255);
  color: white;
}
.nav-item .btn-secondary:focus {
  background: rgb(0, 153, 255);
  color: white;
  box-shadow: rgba(255, 0, 200, 0.363) 0px 0px 0px 3px;
}
</style>
