<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <div
      :class="loading ? 'spinner-border text-pink ms-4' : ''"
      style="width: 3rem; height: 3rem"
    />
    <br /><br />
    <h4>{{ loading ? "Loading..." : "" }}</h4>
  </div>
  <div class="row">
    <div v-for="wisata in wisataList" :key="wisata.id" class="col-lg-4 mb-3">
      <Wisata :wisata="wisata" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex"
import Wisata from "./wisata/Wisata.vue"

export default {
  name: "Wisatas",
  components: {
    Wisata,
  },
  computed: mapGetters(["wisataList", "loading"]),
  methods: mapActions(["fetchAllWisata"]),
  created() {
    this.fetchAllWisata()
  },
}
</script>

<style>
.text-pink {
  color: rgb(255, 0, 200);
}
</style>
