<template>
  <div>
    <Menu />
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
