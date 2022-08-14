<script setup>
const props = defineProps({
  title: {
    type: String
  },
  img: {
    type: String
  },
  date: {
    type: String
  },
  content: {
    type: String
  },
  link: {
    type: String
  },
  category: {
    type: String
  }
})
const stripedText = props.content.replace(/(<([^>]+)>)/gi, "")
const getText = computed(() => stripedText.substring(0, 293))
const getImg = computed((img) => img ?? '/images/logos/vcjj-logo.png')
const getReadingTime = computed(() => `${Math.ceil(stripedText.split(" ").length / 300)} min read`)
</script>
<template>
  <article class="card">
    <div class="img"><img :src="getImg" /></div>
    <div class="content">
      <header>
        <h1>{{ title }}</h1>
      </header>
      <p class="date">{{ date }} </p>
      <p class="desc">{{ getText }}...</p>
    </div>
    <footer>
      <span>{{ category }}</span>
      <span>{{ getReadingTime }} </span>
    </footer>
  </article>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;


  .img {
    display: flex;
    justify-content: center;
    background: #e9e9e9;
    border-radius: 10px 10px 0 0;

    height: 200px;

    img {
      max-width: 100px;
      align-self: center;
    }
  }

  .content {
    padding: 2rem 1.5rem 0;
    flex-grow: 1
  }

  h1 {
    margin: 0;
    font-size: 24px;
    line-height: 1;
  }

  .date {
    font-size: 12px;
    color: rgb(120, 120, 120);
  }

  .desc {
    padding: 1rem 0;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem 2rem;
    color: rgb(151, 151, 151);
    font-size: 12px;

    span:first-of-type {
      margin-right: 1rem;
      border: 1px solid rgb(205, 205, 205);
      border-radius: 50px;
      padding: 3px 8px;
    }
  }
}
</style>