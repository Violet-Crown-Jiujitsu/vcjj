<script setup>
const value = ref([])
</script>
<template>
  <aside>
    <div class="title">
      <h2>Contact Us</h2>
      <p>Select classes you would like info about and we'll get back to you asap!</p>
    </div>
    <div class="form-wrap">
      <FormKit type="form" name="VCJJ - Contact Form" method="POST" data-netlify="true">
        <FormKit type="text" name="name" label="Full Name" validation="required" validation-visibility="blur" />

        <FormKit
          type="email"
          label="Email"
          validation="required|email"
          placeholder="email@gmail.com"
          validation-visibility="blur"
        />

        <FormKit
          type="tel"
          label="Phone number"
          placeholder="xxx-xxx-xxxx"
          validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          :validation-messages="{
            matches: 'Phone number must be in the format xxx-xxx-xxxx',
          }"
          validation-visibility="blur"
        />

        <FormKit
          v-model="value"
          type="checkbox"
          label="Toppings"
          :options="['No Gi BJJ', 'Gi BJJ', 'Teen Bjj', 'Muay Thai']"
        />
      </FormKit>
    </div>
  </aside>
</template>
<style lang="scss" scoped></style>
