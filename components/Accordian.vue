<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    required: true,
  },
  styleOverride: {
    type: Boolean,
    default: false,
  },
})
const flag = ref(false)
const wrap = ref(null)
const summary = ref(null)

const dHeight = computed(() => {
  return wrap?.value?.offsetHeight + 'px'
})

const SHeight = computed(() => {
  return summary?.value?.offsetHeight + 'px'
})

function toggle() {
  const { value } = flag
  flag.value = !value
}
//  <div class="details" ref="wrap" @click="toggle" :style="{ 'max-height': flag ? SHeight : dHeight }">
</script>
<template>
  <div class="details" ref="wrap" @click="toggle">
    <div class="summary" ref="summary">{{ title }}</div>
    <div class="content" ref="info" v-html="content" />
  </div>
</template>
<style lang="scss" scoped>
.details {
  width: 100%;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 20px;
  overflow: hidden;
  transition: margin-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  > * {
    pointer-events: none;
  }
  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    i {
      transform: rotate(0deg);
      font-size: 18px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
  }
  .content {
    padding-bottom: 16px;
  }
}
.details[open] {
  .summary {
    i {
      transform: rotate(180deg);
    }
  }
  .content {
    border-bottom: 1px solid rgb(0 0 0 / 8%);
  }
}
</style>
