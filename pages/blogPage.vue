<template>
  <div>
    <h1>Blog List</h1>
    <div v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">
        {{ post.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
    posts.sort((a,b) => {
      if(a.slug < b.slug){return -1;}
      else{return 1;}
    });
    return {
      posts,
    };
  }
};
</script>