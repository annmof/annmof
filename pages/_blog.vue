<template>
  <div>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
    <nav class="pagination is-justify-content-center">
      <NuxtLink v-if="prev" class="pagination-previous" :to="{ path: prev.slug }">Previous</NuxtLink>
      <NuxtLink class="pagination-previous" to="/">Home</NuxtLink>
      <NuxtLink v-if="next" class="pagination-previous" :to="{ path: next.slug }">Next</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const post = await $content("blog", params.blog).fetch();
    const [prev, next] = await $content("blog")
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .surround(params.blog)
      .fetch();     
    return {
      post,
      prev,
      next
    };
  },
  head(){
    return{
      title: this.post.description,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog post description'
        }
      ]
    } 
  }
};
</script>
