<template>
  <div>

    <logo-section :image-url="require('static/images/logo_annmof.png')" brand="annmof" font="bimbo"></logo-section>
    <section class="bg-pink-100">
      <h1 class="flex flex-col">
        <span class="text-4xl xl:text-9xl text-center text-purple-500 p-16 filter drop-shadow-xl">Rédactrice web indépendante</span>
        <span class="text-6xl xl:text-9xl text-center text-yellow-500 transform filter drop-shadow-xl">& SEO</span>
      </h1>
      <h2 class="flex flex-col">
        <span class="text-3xl xl:text-6xl text-center text-green-500 pt-16 filter drop-shadow-xl">Et si on vous taillez une</span>
        <span class="text-6xl xl:text-9xl text-center text-green-500 pt-8 filter drop-shadow-xl">stratégie digitale</span>
        <span class="text-3xl xl:text-6xl text-center text-green-500 pt-16 underline filter drop-shadow-xl">sur-mesure</span>
        <span class="text-6xl xl:text-9xl text-center text-green-500 p-16 filter drop-shadow-xl">?</span>
      </h2>
    </section>
    <section class="bg-yellow-100">
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
      <h3 class="text-pink-500 text-3xl xl:text-6xl text-center p-4 xl:p-16 max-w-prose m-auto">Google va vous adorer</h3>
      <p id="heart" class="text-pink-500 text-3xl xl:text-6xl text-center p-4 xl:p-16 max-w-prose m-auto">❤️</p>
    </section>
    <section class="bg-purple-100">
      <p class="text-purple-500 text-3xl md:text-9xl filter drop-shadow-2xl p-4 md:p-16 ombreLg z-10">EXPERTISES</p>
      <h2 class="ombre3D">Référencement naturel</h2>
      <h2 class="ombre3D">Ligne éditoriale</h2>
      <h2 class="ombre3D">Contenu de marque</h2>
      <h2 class="ombre3D">Blogging Premium</h2>
    </section>
    <section class="bg-green-100 h-screen z-20 relative">
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Agence SEO et rédactrice web à Avignon (84) et France entière'
    }
  },
  head() {
    return {
      title: this.title,
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ],
    };
  },
}
</script>

<style lang="scss">
  $color: #6EE7B7;

  @function makelongshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 200 {
      $val: #{$val}, #{5*$i}px #{5*$i}px #{$color};
    }
    @return $val;
  }

  @mixin longshadow($color) {
    text-shadow: makelongshadow($color);
  }

  .ombreLg{
    @include longshadow(lighten($color, 8%));
  }

  .ombre3D{
    @apply relative text-yellow-500 text-2xl md:text-6xl p-4 md:p-16 z-0;
    text-shadow: 1px 5px 2px rgba(16, 16, 16, 0.2), 1px 7px 5px rgba(16, 16, 16, 0.1), 1px 10px 15px rgba(16, 16, 16, 0.1), 1px 15px 30px rgba(16, 16, 16, 0.2);
  }

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
