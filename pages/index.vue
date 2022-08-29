<script setup>
import Hero from '../components/home/hero.vue'
import Blog from '../components/home/blog.vue'
import Benefits from '../components/home/benefits.vue'
import Review from '../components/home/review.vue'
import Images from '../components/home/images.vue'
import Fit from '../components/home/fit.vue'
import About from '../components/home/about.vue'

definePageMeta({
  layout: 'home',
})
</script>
<template>
  <NuxtLayout>
    <MetaTags
      title="Violet Crown Jiu Jitsu | Austin Martial Arts & Fitness"
      desc="Conveniently located in Austin, our martial arts classes are excellent choices for self-defense, discipline, and fitness for all ages & fitness levels."
    />

    <main>
      <Hero />
      <ScheduleCta />
      <FooterCta />
      <!-- <About />
        <Fit />
        <Review />
        <Images />
        <Benefits />
        <Blog /> -->
    </main>
  </NuxtLayout>
</template>

<style>
.left-text-large-header {
  font-size: 32px;
  line-height: 1.2em;
}

@media (min-width: 960px) {
  .left-text-large-header {
    font-size: 70px;
    line-height: 1.2em;
  }
}
</style>
