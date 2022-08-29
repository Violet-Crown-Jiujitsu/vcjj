<script setup>
const siteLinks = reactive([
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  {
    label: 'Programs',
    path: '',
    subLinks: [
      { label: 'No Gi Adult BJJ', path: '/program/no-gi-adult-bjj' },
      { label: 'Muay Thai', path: '/program/muay-thai' },
      { label: 'Teen BJJ & MMA (Coming Soon)', path: '' },
    ],
  },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Contact', path: '/location/austin-tx' },
])
</script>
<template>
  <header class="nav-wrap">
    <nav>
      <div class="logo-wrap">
        <img src="/images/logos/vcjj-logo.png" width="50" />
        <NuxtLink class="link" v-slot="{ navigate }" to="/">
          <h3 @click="navigate">Violet Crown Jiu Jitsu</h3>
        </NuxtLink>
      </div>

      <!-- Nav Links -->
      <!-- <NavDesktop :siteLinks="siteLinks" class="hide-mobile" />
      <NavMobile :siteLinks="siteLinks" class="show-mobile" /> -->
    </nav>
  </header>
</template>
<style lang="scss" scoped>
@media (min-width: 801px) {
  .show-mobile {
    display: none;
  }
}
@media (max-width: 800px) {
  .hide-mobile {
    display: none;
  }
}
.link {
  color: $purple-2;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  align-self: center;
  &:hover {
    color: $purple-2;
  }
}
header {
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 100;
}
.logo-wrap {
  display: flex;
  align-items: center;
  h3 {
    font-size: 20px;
  }
  img {
    width: 45px;
    align-self: center;
    margin-right: 0.5rem;
  }
}

nav {
  display: flex;
  justify-content: space-between;
}
</style>
