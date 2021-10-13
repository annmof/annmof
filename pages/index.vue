<template>
  <div>
    <h1>Annmof</h1>
    <NuxtLink to="blogPage">Blog</NuxtLink>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  }
}
</script>

<style scoped>
  h1,h2{
    text-align: center;
  }
</style>
