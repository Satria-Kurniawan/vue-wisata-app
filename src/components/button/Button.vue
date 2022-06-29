<template>
  <button class="btn" :style="{ background: bgColor, color: textColor }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    bgColor: String,
    textColor: String,
  },
}
</script>

<style>
.btn:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
</style>
