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

<style>
  .ombreLg{
    text-shadow: 0px 0px #91edc8, 5px 5px #91edc8, 10px 10px #91edc8, 15px 15px #91edc8, 20px 20px #91edc8, 25px 25px #91edc8, 30px 30px #91edc8, 35px 35px #91edc8, 40px 40px #91edc8, 45px 45px #91edc8, 50px 50px #91edc8, 55px 55px #91edc8, 60px 60px #91edc8, 65px 65px #91edc8, 70px 70px #91edc8, 75px 75px #91edc8, 80px 80px #91edc8, 85px 85px #91edc8, 90px 90px #91edc8, 95px 95px #91edc8, 100px 100px #91edc8, 105px 105px #91edc8, 110px 110px #91edc8, 115px 115px #91edc8, 120px 120px #91edc8, 125px 125px #91edc8, 130px 130px #91edc8, 135px 135px #91edc8, 140px 140px #91edc8, 145px 145px #91edc8, 150px 150px #91edc8, 155px 155px #91edc8, 160px 160px #91edc8, 165px 165px #91edc8, 170px 170px #91edc8, 175px 175px #91edc8, 180px 180px #91edc8, 185px 185px #91edc8, 190px 190px #91edc8, 195px 195px #91edc8, 200px 200px #91edc8, 205px 205px #91edc8, 210px 210px #91edc8, 215px 215px #91edc8, 220px 220px #91edc8, 225px 225px #91edc8, 230px 230px #91edc8, 235px 235px #91edc8, 240px 240px #91edc8, 245px 245px #91edc8, 250px 250px #91edc8, 255px 255px #91edc8, 260px 260px #91edc8, 265px 265px #91edc8, 270px 270px #91edc8, 275px 275px #91edc8, 280px 280px #91edc8, 285px 285px #91edc8, 290px 290px #91edc8, 295px 295px #91edc8, 300px 300px #91edc8, 305px 305px #91edc8, 310px 310px #91edc8, 315px 315px #91edc8, 320px 320px #91edc8, 325px 325px #91edc8, 330px 330px #91edc8, 335px 335px #91edc8, 340px 340px #91edc8, 345px 345px #91edc8, 350px 350px #91edc8, 355px 355px #91edc8, 360px 360px #91edc8, 365px 365px #91edc8, 370px 370px #91edc8, 375px 375px #91edc8, 380px 380px #91edc8, 385px 385px #91edc8, 390px 390px #91edc8, 395px 395px #91edc8, 400px 400px #91edc8, 405px 405px #91edc8, 410px 410px #91edc8, 415px 415px #91edc8, 420px 420px #91edc8, 425px 425px #91edc8, 430px 430px #91edc8, 435px 435px #91edc8, 440px 440px #91edc8, 445px 445px #91edc8, 450px 450px #91edc8, 455px 455px #91edc8, 460px 460px #91edc8, 465px 465px #91edc8, 470px 470px #91edc8, 475px 475px #91edc8, 480px 480px #91edc8, 485px 485px #91edc8, 490px 490px #91edc8, 495px 495px #91edc8, 500px 500px #91edc8, 505px 505px #91edc8, 510px 510px #91edc8, 515px 515px #91edc8, 520px 520px #91edc8, 525px 525px #91edc8, 530px 530px #91edc8, 535px 535px #91edc8, 540px 540px #91edc8, 545px 545px #91edc8, 550px 550px #91edc8, 555px 555px #91edc8, 560px 560px #91edc8, 565px 565px #91edc8, 570px 570px #91edc8, 575px 575px #91edc8, 580px 580px #91edc8, 585px 585px #91edc8, 590px 590px #91edc8, 595px 595px #91edc8, 600px 600px #91edc8, 605px 605px #91edc8, 610px 610px #91edc8, 615px 615px #91edc8, 620px 620px #91edc8, 625px 625px #91edc8, 630px 630px #91edc8, 635px 635px #91edc8, 640px 640px #91edc8, 645px 645px #91edc8, 650px 650px #91edc8, 655px 655px #91edc8, 660px 660px #91edc8, 665px 665px #91edc8, 670px 670px #91edc8, 675px 675px #91edc8, 680px 680px #91edc8, 685px 685px #91edc8, 690px 690px #91edc8, 695px 695px #91edc8, 700px 700px #91edc8, 705px 705px #91edc8, 710px 710px #91edc8, 715px 715px #91edc8, 720px 720px #91edc8, 725px 725px #91edc8, 730px 730px #91edc8, 735px 735px #91edc8, 740px 740px #91edc8, 745px 745px #91edc8, 750px 750px #91edc8, 755px 755px #91edc8, 760px 760px #91edc8, 765px 765px #91edc8, 770px 770px #91edc8, 775px 775px #91edc8, 780px 780px #91edc8, 785px 785px #91edc8, 790px 790px #91edc8, 795px 795px #91edc8, 800px 800px #91edc8, 805px 805px #91edc8, 810px 810px #91edc8, 815px 815px #91edc8, 820px 820px #91edc8, 825px 825px #91edc8, 830px 830px #91edc8, 835px 835px #91edc8, 840px 840px #91edc8, 845px 845px #91edc8, 850px 850px #91edc8, 855px 855px #91edc8, 860px 860px #91edc8, 865px 865px #91edc8, 870px 870px #91edc8, 875px 875px #91edc8, 880px 880px #91edc8, 885px 885px #91edc8, 890px 890px #91edc8, 895px 895px #91edc8, 900px 900px #91edc8, 905px 905px #91edc8, 910px 910px #91edc8, 915px 915px #91edc8, 920px 920px #91edc8, 925px 925px #91edc8, 930px 930px #91edc8, 935px 935px #91edc8, 940px 940px #91edc8, 945px 945px #91edc8, 950px 950px #91edc8, 955px 955px #91edc8, 960px 960px #91edc8, 965px 965px #91edc8, 970px 970px #91edc8, 975px 975px #91edc8, 980px 980px #91edc8, 985px 985px #91edc8, 990px 990px #91edc8, 995px 995px #91edc8, 1000px 1000px #91edc8;
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
