<template>
  <div>
    <MenuBurger />
    <div class="center">
      <img src="~/assets/images/logo 110x150.png" width="220px" height="300px" />
    </div>
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
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
  }
</style>
