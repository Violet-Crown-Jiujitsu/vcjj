<template>
  <section id="" class="hero">
    <div class="bg-img"></div>
    <div class="wrapper">
      <span class="">Welcome To</span>
      <h1 class="">Violet Crown Jiu Jitsu</h1>
      <p class="h6">
        Our site is currently under construction. You can check out our schedule below and please contact us with any
        questions!
      </p>
      <div class="banner-buttons">
        <a class="btn btn-1" href="#schedule">View Schedule</a>
        <a href="#contact" class="btn btn-2">Contact Us</a>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero {
  background: linear-gradient(225deg, #10002bff, #240046ff);
  position: relative;
  padding: 3rem;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-img {
  background: url(/img/img-4.webp) no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.3;
}
.wrapper {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  color: white;
  span {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-bottom: 0.5rem;
  }
  h1 {
    letter-spacing: 2px;
  }
  p {
    max-width: 600px;
    padding: 0.5rem 0 3rem;
  }
  .btn {
    border: 1px solid white;
    width: 217px;
    padding: 1rem;
    &:first-of-type {
      margin-right: 1.5rem;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 565px) {
    .banner-buttons {
      .btn {
        float: none;
        font-size: 14px;
        display: block;
        margin: 0;
        &:last-of-type {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
