<script setup>
import { usePostStore } from '~~/stores/postStore'
import Post from '../../components/blog/Post'
const Posts = usePostStore()
const allPosts = Posts.posts
</script>
<template>
  <div>
    <MetaTags title="Blog | Violet Crown Jiu Jitsu" />
    <SmallHeader title="Blog" />
    <section id="posts" class="module p-b-large p-t-large">
      <div class="container">
        <NuxtLink v-for="(post, i) in allPosts" v-slot="{ navigate }" :to="`/blog/${[post.link]}`" custom :key="i">
          <Post class="post" v-bind="post" @click="navigate" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 5rem;

  .post {
    cursor: pointer;
    box-shadow: 0px 10px 13px 0px rgb(0 0 0 / 5%);
  }
}
</style>
