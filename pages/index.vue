<template>
  <div>
    <logo-section :image-url="require('static/images/logo_annmof.png?webp')" brand="annmof" font="bimbo"></logo-section>
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
    <section class="bg-purple-100 text-center">
      <p class="text-purple-500 text-3xl md:text-9xl filter drop-shadow-2xl p-4 md:p-16 ombreLg z-10">EXPERTISES</p>
      <h2 class="expertise_item">Référencement naturel</h2>
      <h2 class="expertise_item">Rédaction web</h2>
      <h2 class="expertise_item">Formation</h2>
      <h2 class="expertise_item">Conseils aux indépendants</h2>
    </section>
    <section class="bg-green-100 z-20 relative text-center pt-8 text-pink-500 text-3xl px-4">
      <p class="text-3xl md:text-9xl pb-16">CONTACT</p>
      <form name="contact_form" method="POST" netlify>
        <p class="mb-4"><label for="nom">Laissez moi votre nom ⤵️</label></p>
        <p class="mb-4"><input class="w-5/6 md:w-3/6 m-auto" type="text" name="nom" rules="required" placeholder="Votre nom"></p>
        <p class="mb-4"><label for="mail">... et votre email ⤵️</label></p>
        <p class="mb-4"><input  class="w-5/6 md:w-3/6 m-auto" type="email" name="mail" rules="required" placeholder="mon@email.fr"></p>
        <p class="mb-4"><label for="message">N'oubliez pas votre message après le bip ! ☎️</label></p>
        <p class="mb-4"><textarea id="message" class="w-5/6 md:w-3/6 m-auto" name="message" rules="required" placeholder="Votre texte ici"></textarea></p>
        <p class="pb-16"><input id="send_button" class="rounded-md p-6" type="submit" value="ENVOYER"></p>
      </form>
    </section>
    <section class="bg-indigo-100 z-20 relative text-center text-green-500 text-3xl">
      <p class="text-3xl md:text-9xl pt-16 pb-16">CLIENTS</p>
      <p class="text-yellow-500 p-4 w-full md:w-3/6 m-auto">Hello Work . Celinika Web . Institut de Formation des Thérapies Brèves (IFTB) . BTV Media Sud . Hypnos Thérapie . Kaly Sushi . Coaching Thérapies . Deuche Forever . Moulin O’ live PROD . SPI Formation . Paye Pro CBF . NetPartner . HP Automobile . Chez Stéphane . Fit Healthy . Dynamic Change . HoliSanté . Red Act . Auto CRF . Pizza des Lys . Nathalie Rodriguez Photographe . FPIS . Ô Naturel Coiffure . Webiliko . Veoneo . Clarashop . Sophia Langues . Izika . Objectif Liberté . Deuche Forever . RCH Méditerranée . France Verte .</p>
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
    };
  },
}
</script>

<style>
  .expertise_item{
    @apply relative text-yellow-500 text-2xl md:text-6xl p-4 md:p-16 z-0;
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
