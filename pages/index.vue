<template>
  <div>
    <div id="container">
      <div class="bg-pink-200 min-h-screen"></div>
      <div class="bg-purple-200 min-h-screen"></div>
      <div class="bg-green-200 min-h-screen"></div>
      <div class="bg-yellow-200 min-h-screen"></div>
      <div class="bg-blue-200 min-h-screen"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ],
    };
  },
}
</script>

<style scoped>

</style>
