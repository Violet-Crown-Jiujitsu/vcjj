<script setup>
const target = ref()
const motionInstance = useMotion(target, {
  initial: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'keyframes',
      duration: 500,
      ease: 'easeInOut',
    },
  },
})
</script>
<template>
  <section id="" class="module content-centered all dark-font normal-font p-t-large p-b-large" ref="target">
    <div class="container">
      <div class="content-centered-container font-center aos-init" data-aos="fade-down">
        <div class="content-sub-header">WELCOME TO</div>
        <h2>Violet Crown Jiu Jitsu</h2>
        <p>
          <img
            class="aligncenter size-full wp-image-868 lazyloaded"
            src="/images/logos/icon.png"
            alt=""
            width="152"
          /><br />
          We know that finding a martial arts school can be overwhelming. At Violet Crown Jiu Jitsu, our priority is to
          help you and/or your children become better versions of yourselves.
        </p>
        <p>
          Our expert instructors are here to learn your goals, and help you achieve them in a fun, exciting, and
          welcoming environment. Take a minute to learn more about our facility, programs, and community through our
          website, and we look forward to seeing you soon!
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
