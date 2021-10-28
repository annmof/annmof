<template>
  <div class="h-screen">
    <img class="m-auto px-16 pb-10 max-h-96 sm:max-h-full" :src="imageUrl" >
    <h1
      class="text-8xl text-center"
      :class="font"
    >
      {{ title }}
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
    title: {
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
