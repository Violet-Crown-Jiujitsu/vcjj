<script setup>
import { useToggle, set } from '@vueuse/core'
const { afterEach } = useRouter()
const [menuOpen, toggle] = useToggle(false)

defineProps({
  siteLinks: {
    type: Array,
  },
})

afterEach((to, from) => set(menuOpen, false))
</script>

<template>
  <div class="mobile-wrapper">
    <div id="menuToggle" @click="toggle()" :class="{ active: menuOpen }">
      <div class="hamburger hamburger2">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <span class="bar bar4"></span>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="body">
        <Transition name="fade">
          <div v-if="menuOpen" class="mobile-nav">
            <ul id="menu" @click="go">
              <li v-for="(link, i) in siteLinks" class="link" :key="i">
                <NuxtLink :to="`${link.path}`">
                  <span>{{ link.label }}</span>
                </NuxtLink>
                <template v-if="link.subLinks">
                  <ul class="subnav">
                    <li v-for="(sublink, j) in link.subLinks" :key="j">
                      <NuxtLink :to="`${sublink.path}`">
                        <span>{{ sublink.label }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
#menuToggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 40px;
  align-items: center;
  .hamburger {
    margin: 0 auto;
    width: 30px;
    height: 16px;
    position: relative;
    .bar {
      padding: 0;
      width: 30px;
      height: 2px;
      background-color: $purple-1;
      display: block;
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
      position: absolute;
    }
    .bar2,
    .bar3 {
      top: 7px;
    }

    .bar3 {
      right: 0;
    }

    .bar4 {
      bottom: 0;
    }
  }
  &.active {
    .hamburger {
      .bar1 {
        transform: translateX(40px);
        background-color: transparent;
      }

      .bar2 {
        transform: rotate(45deg);
      }

      .bar3 {
        transform: rotate(-45deg);
      }

      .bar4 {
        transform: translateX(-40px);
        background-color: transparent;
      }
    }
  }
}
.mobile-nav {
  position: fixed;
  z-index: 99;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.69);
  padding: 60px 35px 50px;
  background-color: #f5f6fa;
  box-shadow: 0 0 10px #85888c;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  .top-nav {
  }
  ul {
    li {
      a:not(a[href]) {
        display: none;
      }
      a {
        display: block;
        padding: 1rem 0;
        transition-delay: 2s;
        text-decoration: none;
        color: #1e1e23;
        opacity: 1;
        font-size: 1.5rem;
        font-weight: 400;
        transition: 200ms;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translate(-100%, 0);
}
</style>
