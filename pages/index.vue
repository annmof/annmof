<template>
  <div>
    <div class="h-screen">
      <img class="m-auto" src="../assets/images/logo_annmof.png" >
      <h1 class="text-9xl text-center">ann mof</h1>
    </div>
    <div class="bg-pink-100">
      <p class="text-9xl text-center text-purple-500 p-16">Rédactrice web indépendante</p>
      <p class="text-9xl text-center text-yellow-500 transform scale-150">& SEO</p>
      <p class="text-6xl text-center text-green-500 pt-16">Et si on vous taillez une</p>
      <p class="text-9xl text-center text-green-500 pt-8">stratégie digitale</p>
      <p class="text-6xl text-center text-green-500 pt-16 underline">sur-mesure<p>
      <p class="text-9xl text-center text-green-500 p-16">?</p>
    </div>
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
  h1{
    font-family: "Bimbo";
  }
  p{
    font-family: "Paytone One"
  }
</style>
