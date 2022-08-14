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
      <div style="display: none" id="block_623a1656da010" class="block_623a1656da010 optin-centered-box -font">
        <div class="optin-box">
          <div class="container">
            <div class="optin-centered-top aos-init" data-aos="fade-down">
              <div class="optin-box-sub-header">VIEW OUR WEB SPECIAL &amp;</div>
              <div class="optin-box-header">ACCESS OUR SCHEDULE</div>
              <p>Secure your spot &amp; get started today with our FREE EXCLUSIVE online offer!</p>
            </div>
            <div class="optin-centered-bot aos-init" data-aos="fade-up">
              <div class="form-wrapper">
                <form
                  method="post"
                  action="#"
                  class="mm-custom-form mm-custom-form-home"
                  id="mm-custom-form-home1236724788"
                  data-instance="1236724788"
                >
                  <div
                    id="mm-form-submission-message-home1236724788"
                    class="mm-form-submission-message mm-form-submission-message-home mm-form-submission-message-home1236724788"
                    style="display: none"
                  ></div>
                  <fieldset>
                    <div class="gform_body">
                      <ul class="gform_fields">
                        <li class="gfield">
                          <input type="text" name="full_name" class="full-name" placeholder="Full Name*" />
                        </li>

                        <li class="gfield">
                          <input type="text" name="email" placeholder="Email*" class="email-field" />
                        </li>

                        <li class="gfield">
                          <input type="text" name="phone" placeholder="Phone*" class="phone-field" minlength="7" />
                        </li>

                        <li class="gfield field-program">
                          <select name="program" class="mm-programs">
                            <option value="">Select a Program*</option>
                            <option value="66">No Gi Adult BJJ</option>
                            <option value="301">Muay Thai</option>
                          </select>
                        </li>

                        <input type="hidden" name="location" value="austin-tx" />

                        <li class="pain-point-field">
                          <input type="hidden" name="pain_point" value="" />
                        </li>
                      </ul>
                    </div>
                    <div class="gform_footer top_label">
                      <input
                        type="checkbox"
                        name="contact_me_by_phone"
                        value="1"
                        style="display: none !important"
                        tabindex="-1"
                        autocomplete="off"
                      />
                      <input type="submit" name="submit" value="Get Started Today" />
                    </div>
                  </fieldset>
                </form>
              </div>
              <span
                >By opting into the web form above you are providing consent for Violet Crown Jiu Jitsu to send you
                periodic text messages. Standard rates may apply. You can reply HELP at anytime or learn more. You may
                opt-out anytime by replying STOP.</span
              >
            </div>
          </div>
        </div>
      </div>
      <About />
      <Fit />
      <Review />
      <Images />
      <Benefits />
      <Blog />
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
