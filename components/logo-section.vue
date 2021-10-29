<template>
  <div class="h-screen">
    <img class="m-auto px-16 pb-10 max-h-96 sm:max-h-full" :src="imageUrl" width=271 height=563>
    <h1
      class="text-7xl text-center"
      :class="font"
    >
      {{ brand }}
    </h1>
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
