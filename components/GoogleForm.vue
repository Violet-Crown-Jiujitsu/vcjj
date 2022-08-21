<script setup>
import { useElementSize } from '@vueuse/core'
const form = ref(null)
</script>
<template>
  <div class="form-wrap">
    <div class="g-form-container">
      <iframe
        class="responsive-iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSejTsba9uIedtQ0oK0n6V3cudshWaRQBDk1RlSeQgDyLmHaJA/viewform?embedded=true"
      ></iframe>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.g-form-container {
  margin-top: 2rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 100%; /* 1:1 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
