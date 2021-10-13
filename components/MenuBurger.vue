<template>
  <div>
    <nav>
      <nav class="burger-menu">
        <div class="burger topline"></div>
        <div class="burger midline"></div>
        <div class="burger botline"></div>
      </nav>

      <div class="menu" style="opacity: 0; filter: blur(5px); display: none">
        <NuxtLink to="/redaction">
          Rédaction
        </NuxtLink>

        <NuxtLink to="/referencement">
          Référencement
        </NuxtLink>

        <NuxtLink to="/formation">
          Formation
        </NuxtLink>

        <NuxtLink to="/blogPage">
          Blog
        </NuxtLink>

        <NuxtLink to="/apropos">
          A propos
        </NuxtLink>

        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted(){
    const burger = document.querySelector('.burger-menu');
    burger.addEventListener('click',()=>{
      const menu = document.querySelector('.menu');
      const burgerLines = document.querySelectorAll('.burger');
      if(menu.style.opacity === "0"){
        menu.style.opacity="1";
        menu.style.filter="blur(0px)";
        menu.style.display="flex";
      }
      else{
        menu.style.display="none";
        menu.style.opacity="0";
        menu.style.filter="blur(5px)";
      }
      burger.classList.toggle('open');
      burgerLines.forEach((e)=>{
        e.classList.toggle('open');
      })
    })
  }
}
</script>

<style scoped>
.burger{
  width:25px;
  height:5px;
  border-radius:5px;
  background-color: black;
  transition: all .3s ease;
}

.burger-menu{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap:5px;
  margin-top:15px;
  margin-right:15px;
  transition: all .3s ease;
}

.burger-menu.open{
  transform: translateX(6px);
}

.topline.open{
  width:30px;
  transform-origin: top left;
  transform: rotate(45deg);
}
.midline.open{
  opacity: 0;
}
.botline.open{
  width:30px;
  transform-origin: bottom left;
  transform: rotate(-45deg);
}

.menu{
  height:100vh;
  transition: .4s filter ease, 0.4s opacity ease;
  flex-direction: column;
}
</style>
