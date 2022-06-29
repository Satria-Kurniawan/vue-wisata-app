<template>
  <div class="card border-0">
    <div class="card-header bg-white border-bottom mb-3">
      <h5 class="text-center">{{ wisata.title }}</h5>
    </div>
    <img
      :src="'https://new-bali-island.000webhostapp.com/images/' + wisata.image"
      alt="Wisata Image"
      class="card-img-top"
      style="height: 14rem"
    />
    <div class="card-body"></div>
  </div>
</template>

<script>
export default {
  name: "Wisata",
  props: {
    wisata: Object,
  },
}
</script>

<style>
img {
  border-radius: 12px;
}
</style>
