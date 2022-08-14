<script setup>
import { usePostStore } from '~~/stores/postStore'
const route = useRoute()
const postStore = usePostStore()
const post = computed(() => postStore.getPost(route.params.id)[0])

const readingTime = (content) => {
  const stripedText = content.replace(/(<([^>]+)>)/gi, '')
  return `${Math.ceil(stripedText.split(' ').length / 300)} min read`
}
</script>
<template>
  <div id="postPage">
    <MetaTags :title="`${post.title} | Violet Crown Jiu Jitsu`" :desc="`Posted: ${post.date}`" />
    <SmallHeader :title="post.title" />
    <section id="post" class="module p-b-large p-t-large">
      <div class="container">
        <div class="content">
          <p class="date">{{ post.date }} <span>·</span> {{ readingTime(post.content) }}</p>
          <div class="desc" v-html="post.content" />
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
#postPage {
  .date {
    color: rgba(117, 117, 117, 1);
    font-size: 14px;
    padding-bottom: 2rem;

    span {
      padding: 0 3px;
      display: inline-block;
    }
  }

  .desc {
    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
