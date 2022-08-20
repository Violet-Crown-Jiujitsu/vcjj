<script setup>
import { useElementSize } from '@vueuse/core'
const el = ref(null)
</script>
<template>
  <div class="form-wrap">
    <iframe
      ref="el"
      class="google-form"
      src="https://docs.google.com/forms/d/e/1FAIpQLScroo5yIbpoJ2V8ASsaE1NJlOuf0aSoauVq4C7VPyqiSEmX_g/viewform?embedded=true"
      width="640"
      height="1010"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >
  </div>
</template>
<style lang="scss" scoped>
.form-wrap {
  // display: flex;
  // aspect-ratio: 64 / 99;
  iframe {
    // height: 100%;
    // width: 100%;
  }
}
</style>
