<script setup>
const slide = [
  {
    name: 'Mark Tovar',
    review:
      'Love this place! Fantastic, super welcoming community with no egos. Top notch, clear instruction. I always leave class in a better mood!',
    source: 'via Google',
    avitar: '/images/logos/vcjj-logo.png',
  },
  {
    name: 'Thomas Bentz',
    review:
      "I've trained at several schools in the area and violet crown is hands down my favorite! Great community, friendly neighborhood vibes, and most importantly top notch instruction. Couldn't recommend it enough.",
    source: 'via Google',
    avitar: '/images/logos/vcjj-logo.png',
  },
  {
    name: 'Maureen Cassidy',
    review:
      'Rudy is an outstanding coach! I have finally started to feel at home in jiu jitsu since joining here. Love this place.',
    source: 'via Google',
    avitar: '/assets/images/reviews/Maureen-Cassidy.png',
  },
  {
    name: 'Nick Allard',
    review:
      "If you're looking for a gym that provides top notch instruction along with a safe and fun environment, I can't recommend this gym enough. Rudy and the gang have done a tremendous job in developing my game. I always look forward to coming in to train. Highly Recommend!",
    source: 'via Google',
    avitar: '/assets/images/reviews/Nick-Allard.png',
  },
]
</script>

<template>
  <section
    style="display: none"
    id="block_5f62707948593"
    class="module block_5f62707948593 reviews-centered all light-font parallax p-t-large p-b-large"
  >
    <div class="container">
      <div class="carousel" aria-label="Gallery">
        <ol>
          <li :id="`carousel__slide-0`" tabindex="0" class="carousel__slide">
            <div class="item">
              <div class="content">
                <div class="img-wrap"><img :src="slide[0].avitar" :alt="slide[0].name" width="90" /></div>
                <h4>{{ slide[0].name }}</h4>
                <p>{{ slide[0].review }}</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  background: url(/images/home/Violet-Crown-Jiu-Jitsu-facebook-2.webp) no-repeat center center;
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
