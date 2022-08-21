<script setup>
const route = useRoute()
defineProps({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  noFollow: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <Head>
    <!-- title -->
    <template v-if="title">
      <Title>{{ title }}</Title>
      <Meta property="og:title" :content="title" />
      <Meta name="twitter:title" :content="title" />
    </template>

    <!-- description -->
    <template v-if="desc">
      <Meta v-if="desc" name="description" :content="desc" />
      <Meta property="og:description" :content="desc" />
      <Meta name="twitter:description" :content="desc" />
    </template>

    <!-- image -->

    <Meta property="og:image" content="/images/og-image/Violet-Crown-Jiu-Jitsu-facebook-1.jpg" />
    <Meta name="twitter:image" content="/images/og-image/Violet-Crown-Jiu-Jitsu-facebook-1.jpg" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="630" />

    <!-- canonical -->

    <Link rel="canonical" :href="$route.fullPath" />
    <Meta property="og:url" :content="$route.fullPath" />
    <Meta name="twitter:url" :content="$route.fullPath" />

    <!-- Type -->
    <Meta property="og:type" content="website" />

    <!-- robots -->
    <Meta name="robots" v-if="noFollow" content="noindex,nofollow" />
    <!-- <Meta name="google-site-verification" content="" /> -->
    <SchemaOrgWebSite name="Harlan Wilton" />
    <SchemaOrgWebPage />
  </Head>
</template>
