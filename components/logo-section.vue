<template>
  <div class="h-screen">
    <img id="logo" :src="imageUrl" class="mx-auto px-8 mb-8" width="auto" height="75vh">
    <p
      class="text-7xl text-center"
      :class="font"
    >
      {{ brand }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    font: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  #logo{
    height: 75vh;
  }
</style>
