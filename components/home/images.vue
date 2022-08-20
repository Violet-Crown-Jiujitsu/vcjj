<script setup>
const images = [
  '/images/home/gallery/Photo-Jan-23-6-35-12-PM.webp',
  'images/home/gallery/Photo-Jan-25-7-15-57-PM-1.webp',
  '/images/home/gallery/Photo-Jan-25-7-15-57-PM.webp',
  '/images/home/gallery/Photo-Jan-28-12-01-35-PM.webp',
  '/images/home/gallery/Photo-Jan-28-12-01-35-PM-3.webp',
  '/images/home/gallery/Photo-Jan-20-7-54-33-AM.webp',
  '/images/home/gallery/Photo-Dec-09-4-13-38-PM.webp',
  '/images/home/gallery/Photo-Jan-23-3-48-43-PM-scaled.webp',
]
</script>
<template>
  <section>
    <div class="home-slider">
      <div v-for="(img, i) in images">
        <img :src="img" :alt="`gallery-img-${i}`" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.home-slider {
  display: flex;
  width: 100%;
  overflow: hidden;
  > div {
    flex: 1 0 25%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
