<template>
  <SectionDivider />
  <div class="home">
    <Wisatas />
  </div>
</template>

<script>
import SectionDivider from "../components/divider/SectionDivider.vue"
import Wisatas from "../components/wisatas/Wisatas.vue"

export default {
  name: "HomeView",
  components: {
    Wisatas,
    SectionDivider,
  },
}
</script>
