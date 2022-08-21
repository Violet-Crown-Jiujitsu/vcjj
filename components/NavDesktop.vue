<script setup>
defineProps({
  siteLinks: {
    type: Array,
  },
})
</script>
<template>
  <ul class="menu">
    <li
      class="main-link"
      v-for="(link, i) in siteLinks"
      :class="{ 'has-children': link.subLinks }"
      :key="`nav-link-${i}`"
    >
      <NuxtLink :to="link.path" class="link">
        <span>{{ link.label }}</span>
      </NuxtLink>
      <ul class="submenu" v-if="link.subLinks">
        <li class="sub-link" v-for="(subLink, j) in link.subLinks">
          <NuxtLink class="link" :to="`${link.path}${subLink.path}`">
            <span>{{ subLink.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
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
.menu {
  display: flex;
  align-items: center;
  li {
    &:hover {
      > .link {
        color: $purple-5;
      }
    }
  }
  .main-link {
    position: relative;
    height: 100%;
    > .link {
      display: flex;
      align-items: center;
      padding: 0 0.8rem;
      height: 100%;
    }
  }
}
.has-children {
  .submenu {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 100%;
    left: -50%;
    width: 230px;
    background: white;
    border-radius: 4px;
    z-index: 1;
    box-shadow: 0px 0px 15px -2px rgb(0 0 0 / 20%);
    transform: translateY(-10px);
    transition: 0.3s ease;
    .sub-link {
      .link {
        display: block;
        font-size: 14px;
        padding: 0.8rem;
        border-bottom: 1px solid rgb(204 204 204 / 51%);
      }
    }
  }
  &:hover {
    .submenu {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
  }
}
</style>
