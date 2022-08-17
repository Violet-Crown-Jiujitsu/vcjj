<template>
  <section id="" class="module banner banner-left-aligned dark-font capitalize-font header-normal">
    <div class="banner-bg"></div>
    <div class="container">
      <div class="left-text">
        <div>
          <span
            class="left-text-small-header"
            v-motion
            :initial="{
              opacity: 0,
              y: 20,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
              },
            }"
            >Austin MARTIAL ARTS &amp; FITNESS</span
          >
          <h1
            class="left-text-large-header"
            v-motion
            :initial="{
              opacity: 0,
              y: 30,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: 100,
                ease: 'easeOut',
              },
            }"
          >
            REACH YOUR FULL POTENTIAL WITH Violet Crown Jiu Jitsu
          </h1>
          <p
            v-motion
            :initial="{
              opacity: 0,
              y: 40,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                ease: 'easeOut',
                delay: 150,
              },
            }"
          >
            We at Violet Crown Jiu Jitsu are dedicated to your success. Get started today with our EXCLUSIVE offer!
            Request more information today to find out how you or your child can start training.
          </p>
          <div
            class="banner-buttons"
            v-motion
            :initial="{
              opacity: 0,
              y: 40,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                ease: 'easeOut',
                delay: 200,
              },
            }"
          >
            <a class="btn btn-solid btn-color-primary btn-font- pop-opt">GET STARTED TODAY</a>
            <a href="/about-us/" class="btn btn-outline btn-color-tertiary btn-font-">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.banner-bg {
  background: url(/images/home-hero-bg.webp) no-repeat center center;
  background-size: cover;
}

.banner-left-aligned {
  .btn {
    margin: 0 auto 10px;
    display: table;
    float: none;

    &:last-child {
      margin: 0;
    }
  }

  .banner-buttons {
    float: left;
    width: 100%;
    margin: 15px 0 0;
  }
}

.left-text {
  .btn {
    margin: 0 auto 10px;
    display: table;
    float: none;

    &:last-child {
      margin: 0;
    }
  }
}

@media (min-width: 960px) {
  .banner-left-aligned {
    .btn {
      margin: 0 10px 0 0;
      float: left;
    }
  }

  .left-text {
    .btn {
      margin: 0 10px 0 0;
      float: left;
    }
  }
}
</style>
