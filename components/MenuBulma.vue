<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <img src="~/assets/images/logo 110x150.png" width="55px" height="75px">
        </Nuxtlink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Services
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Rédaction
              </a>
              <a class="navbar-item">
                Référencement
              </a>
              <a class="navbar-item">
                Formation
              </a>
            </div>
          </div>

          <NuxtLink to="/blogPage" class="navbar-item">
            Blog
          </NuxtLink>

          <NuxtLink to="/redaction" class="navbar-item">
            A propos
          </NuxtLink>

          <NuxtLink to="/redaction" class="navbar-item">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted(){
    const burger = document.querySelector('.navbar-burger');
    const nav = document.querySelector('.navbar-menu');
    burger.addEventListener('click',()=>{
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    })
  }
}
</script>

<style scoped>
  .navbar-item img{
    min-height: 75px !important;
  }
</style>
