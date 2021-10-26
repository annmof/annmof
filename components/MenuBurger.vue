<template>
  <div class="font-serif">
    <nav>
      <nav class="burger-menu" @click="isShow = !isShow">
        <div class="burger topline"></div>
        <div class="burger midline"></div>
        <div class="burger botline"></div>
      </nav>

      <div v-show="isShow" class="menu">
        <NuxtLink to="/redaction" class="bg-pink-500">
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
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
.burger{
  width:25px;
  height:2px;
  border-radius:5px;
  background-color: black;
  transition: all .3s ease;
}

.burger-menu{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap:8px;
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
  width: 100vw;
  transition: .4s filter ease, 0.4s opacity ease;
  position: absolute;
  top:0;
  left:0;
  z-index: -10;
}
</style>
