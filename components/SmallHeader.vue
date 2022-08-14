<script setup>
defineProps({
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="hero inner-topper centered-align dark-font angle">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <h1>{{ $props.title }}</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  background: url(/images/about-us/Violet-Crown-Jiu-Jitsu-scaled.webp) no-repeat center center;
  background-size: cover;
  text-shadow: 2px 2px 2px whitesmoke;
}
</style>
