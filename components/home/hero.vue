<template>
  <section id="" class="module banner banner-left-aligned dark-font capitalize-font header-normal">
    <div class="banner-bg"></div>
    <div class="container">
      <div class="left-text">
        <div>
          <span class="left-text-small-header">Austin MARTIAL ARTS &amp; FITNESS</span>
          <h1 class="left-text-large-header">REACH YOUR FULL POTENTIAL WITH Violet Crown Jiu Jitsu</h1>
          <p>
            We at Violet Crown Jiu Jitsu are dedicated to your success. Get started today with our EXCLUSIVE offer!
            Request more information today to find out how you or your child can start training.
          </p>
          <div class="banner-buttons">
            <a class="btn btn-solid btn-color-primary btn-font- pop-opt" href="/schedule">GET STARTED TODAY</a>
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
@media (max-width: 960px) {
  .banner {
    background: linear-gradient(225deg, #10002bff, #240046ff);
    .banner-bg {
      opacity: 0.3;
    }
    .left-text {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
      float: none;
      color: white;
      .left-text-large-header {
        text-shadow: none;
      }
      .btn.btn-solid.btn-color-primary,
      .btn.btn-outline.btn-color-tertiary {
        background: none !important;
        border: 1px solid white;
        color: white;
        margin-top: 1rem !important;
        width: 240px;
      }
    }
  }
}
</style>
