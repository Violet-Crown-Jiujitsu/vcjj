<script setup>
useSchemaOrg([
  defineWebSite({
    name: 'Violet Crown Jiu Jitsu',
  }),
  // defineWebPagePartial(),
  defineLocalBusiness({
    name: 'Violet Crown Jiu Jitsu',
    address: {
      streetAddress: '1609 Ohlen Rd, Austin, TX 78758',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78758',
      addressCountry: 'US',
    },
    image: '/images/og-image/Violet-Crown-Jiu-Jitsu-facebook-1.jpg',
    telephone: '+1-781-555-1212',
    priceRange: '$$',
  }),
])
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <Nav />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
