<template>
  <div class="top row">
    <div class="text-section col-lg-4 col-sm-12 col-12">
      <div>
        <h2>Welcome to</h2>
        <h2>Bali Island</h2>
      </div>
      <SectionDivider />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          aliquid, rem laudantium iure molestias non libero debitis sequi
          obcaecati ipsa.
        </p>
      </div>
      <Button :text="'Read More'" class="btn-primary px-3 py-2" />
    </div>
    <div class="hero-section col-lg-6 col-sm-12 col-12">
      <img src="../assets/hero.svg" alt="hero" class="hero-img" />
    </div>
  </div>

  <div class="middle">
    <div class="text-end">
      <h5>Now Trending</h5>
    </div>
    <div class="d-flex justify-content-end">
      <SectionDivider style="margin-bottom: 0vh" />
    </div>
    <div class="position-absolute top-50 start-50 translate-middle">
      <div
        :class="loading ? 'spinner-border text-pink ms-4' : ''"
        style="width: 3rem; height: 3rem"
      />
      <br /><br />
      <h4>{{ loading ? "Loading..." : "" }}</h4>
    </div>
    <router-link to="/home" class="more">
      <h6>See All</h6>
    </router-link>
    <div class="row">
      <div
        v-for="wisata in wisataList.filter(
          (wisata) =>
            wisata.category.category == 'Tren1' ||
            wisata.category.category == 'Tren2' ||
            wisata.category.category == 'Tren3' ||
            wisata.category.category == 'Tren4'
        )"
        :key="wisata.id"
        class="col-lg-3"
      >
        <div class="card card-custom border-0">
          <img
            :src="
              'https://new-bali-island.000webhostapp.com/images/' + wisata.image
            "
            alt="gambar"
            class="card-img"
          />
          <div class="card-body">
            <div class="card-title">
              <h6>{{ wisata.title }}</h6>
            </div>
            <div class="card-text">
              {{ wisata.description.substring(0, 45) + "..." }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="middle-bot">
    <div class="text-center">
      <h5>What's on the Website</h5>
    </div>
    <div class="row justify-content-center">
      <SectionDivider />
    </div>
    <div class="card card-custom border-0" id="informations">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-content mb-3">
              <div class="card-body">
                <i
                  class="fa-solid fa-location-dot fa-2xl d-flex justify-content-center p-4"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus commodi assumenda vitae nisi repellat ratione,
                  voluptates doloribus pariatur provident quam. Rerum possimus
                  obcaecati est inventore vero dolorum qui ex natus.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card card-content mb-3"
              style="background: rgb(255, 0, 200)"
            >
              <div class="card-body">
                <i
                  class="fa-solid fa-camera fa-2xl d-flex justify-content-center p-4"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus commodi assumenda vitae nisi repellat ratione,
                  voluptates doloribus pariatur provident quam. Rerum possimus
                  obcaecati est inventore vero dolorum qui ex natus.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-content mb-3">
              <div class="card-body">
                <i
                  class="fa-solid fa-panorama fa-2xl d-flex justify-content-center p-4"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus commodi assumenda vitae nisi repellat ratione,
                  voluptates doloribus pariatur provident quam. Rerum possimus
                  obcaecati est inventore vero dolorum qui ex natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import SectionDivider from "../components/divider/SectionDivider.vue"
import Button from "../components/button/Button.vue"

export default {
  name: "LandingView",
  components: {
    SectionDivider,
    Button,
  },
  computed: mapGetters(["wisataList", "loading"]),
  methods: mapActions(["fetchAllWisata"]),
  created() {
    this.fetchAllWisata()
  },
}
</script>

<style>
h2 {
  font-size: 3rem;
  font-weight: 700;
}
.hero-section {
  margin-left: 7vw;
}
.text-section {
  margin-top: 12vh;
}
.hero-img {
  width: 48vw;
  margin-top: 2vh;
}
.btn-primary {
  border-radius: 20px;
  background: rgb(0, 153, 255);
  border: none;
}
.btn-primary:hover {
  background: rgb(255, 0, 200);
}
.btn-primary:focus {
  background: rgb(255, 0, 200);
  box-shadow: rgba(0, 174, 255, 0.363) 0px 0px 0px 3px;
}
.middle {
  margin-top: 2vh;
}
.middle-bot {
  margin-top: 10vh;
}
.card-custom {
  border-radius: 12px;
  box-shadow: 3px 13px 46px -23px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 3px 13px 46px -23px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 3px 13px 46px -23px rgba(0, 0, 0, 0.16);
}
.card-img {
  border-radius: 12px 12px 0px 0px;
  height: 10rem;
}
.more {
  color: rgb(0, 153, 255);
  text-decoration: none;
}
.more:hover {
  color: rgb(255, 0, 200);
}
.card-content {
  border: 0px;
  background: rgb(0, 153, 255);
  color: white;
  border-radius: 12px;
}
p {
  text-align: justify;
}

@media screen and (max-width: 991px) {
  .hero-section img {
    width: 600px;
  }
  .text-section {
    margin-top: 4vh;
  }
  .card-custom {
    margin-top: 12px;
  }
  .card-img {
    height: 20rem;
  }
}
@media screen and (max-width: 766px) {
  .hero-section img {
    width: 400px;
  }
}
@media screen and (max-width: 575px) {
  .hero-section img {
    width: 308px;
  }
  .card-img {
    height: 12rem;
  }
}
</style>
