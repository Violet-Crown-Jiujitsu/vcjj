<script setup>
defineProps({
  faqs: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <section>
    <div class="container">
      <header>
        <h2 class="module-header">FAQS</h2>
      </header>
      <div class="all-faqs">
        <template v-for="(faq, i) in faqs" :key="i">
          <Accordian class="faq" :title="faq.title" :content="faq.content" />
        </template>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 3rem 0;

  clear: both;
  @media (min-width: 960px) {
    min-height: 360px;
  }
}
.all-faqs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .faq {
    width: 100%;
    @media (min-width: 960px) {
      width: 45%;
    }
  }
}
</style>
