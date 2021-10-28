<template>
  <div>
    <logo-section :image-url="require('../assets/images/logo_annmof.png')" title="annmof" font="bimbo"></logo-section>
    <div class="bg-pink-100">
      <p class="text-4xl xl:text-9xl text-center text-purple-500 p-16 filter drop-shadow-xl">Rédactrice web indépendante</p>
      <p class="text-6xl xl:text-9xl text-center text-yellow-500 transform filter drop-shadow-xl">& SEO</p>
      <p class="text-3xl xl:text-6xl text-center text-green-500 pt-16 filter drop-shadow-xl">Et si on vous taillez une</p>
      <p class="text-6xl xl:text-9xl text-center text-green-500 pt-8 filter drop-shadow-xl">stratégie digitale</p>
      <p class="text-3xl xl:text-6xl text-center text-green-500 pt-16 underline filter drop-shadow-xl">sur-mesure<p>
      <p class="text-6xl xl:text-9xl text-center text-green-500 p-16 filter drop-shadow-xl">?</p>
    </div>
    <div class="bg-yellow-100">
      <p class="text-purple-500 text-9xl text-center filter drop-shadow-2xl p-16 bimbo">Hello</p>
      <p class="text-pink-500 text-3xl text-center p-4 xl:p-16 max-w-prose m-auto">Chaque jour, j'accompagne des chefs d'entreprises, commerçants, professions libérales, artisans et artistes, qui savent qu'un site web bien <u>référencé</u> est indispensable au développement de leur activité.</p>
      <div class="flex flex-col md:flex-row gap-4 justify-center m-4 md:m-16 text-purple-500">
        <div class="flex-1 shadow-2xl xl:p-16 p-8">
          <p class="text-3xl xl:text-6xl mb-4">93%</p>
          <p class="text-xl xl:text-2xl">des internautes français utilisent Google comme moteur de recherche</p>
        </div>
        <div class="flex-1 shadow-2xl xl:p-16 p-8">
          <p class="text-3xl xl:text-6xl mb-4">80%</p>
          <p class="text-xl xl:text-2xl">des français achetent sur internet ou s'informent en ligne avant d'acheter un produit ou un service</p>
        </div>
      </div>
      <p class="text-pink-500 text-3xl xl:text-6xl text-center p-4 xl:p-16 max-w-prose m-auto">Vos clients vous cherchent sur Internet : Montrez-vous !</p>
      <p class="text-purple-500 text-xl xl:text-3xl text-center p-4 xl:p-16 max-w-prose m-auto">Pour qu'ils vous trouvent parmi la multitude de sites concurrents, il va falloir adopter une stratégie de <u>référencement naturel</u> qui s'appuie sur des contenus intéressants et optimisés pour <u>attirer du trafic</u> et <u>gagner en popularité</u>.</p>
      <p class="text-pink-500 text-3xl xl:text-6xl text-center p-4 xl:p-16 max-w-prose m-auto">Google va vous adorer</p>
      <p id="heart" class="text-pink-500 text-3xl xl:text-6xl text-center p-4 xl:p-16 max-w-prose m-auto">❤️</p>
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

<style>
  @keyframes beat {
    from {
      transform: scale3d(0.85, 0.85, 0.85);
    }

    50% {
      transform: scale3d(1, 1, 1);
    }

    to {
      transform: scale3d(0.85, 0.85, 0.85);
    }
  }

  #heart{
    animation: beat 1s infinite;
  }
</style>
