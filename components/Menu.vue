<script setup>
defineProps({
  links: {
    type: Array,
  },
})
</script>
<template>
  <div class="menu" v-for="(link, i) in links">
    <NuxtLink class="link" :to="`${link.path}`" :key="i">
      <span>{{ link.label }}</span>
    </NuxtLink>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.menu {
}
</style>
