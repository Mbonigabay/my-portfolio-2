<template>
  <header>
    <div class="menu-btn" :class="{ close: showMenu }" @click="toggleMenu">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu" :class="{ show: showMenu }">
      <div class="menu-branding" :class="{ show: showMenu }">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav" :class="{ show: showMenu }">
        <li
          v-for="(navlink, index) in activeNavlinks"
          :key="index"
          class="nav-item"
          :class="{ current: route.path === navlink.link, show: showMenu }"
        >
          <nuxt-link :to="`${navlink.link}`" class="nav-link" @click="closeMenu">
            {{ navlink.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();
const { data: navlinks } = useFetch("/api/navlinks");
const showMenu = ref(false);

const activeNavlinks = computed(() => {
  return navlinks.value?.filter(link => link.status === 'active') || [];
});

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
};
</script>

<style scoped>
/* Scoped refinements for the header components */
.menu-btn {
  z-index: 10;
}

.menu-btn:hover .btn-line {
  background: var(--md-sys-color-primary);
}

.menu {
  background: var(--md-sys-color-surface-container);
}

.menu-branding {
  background: var(--md-sys-color-surface-container-high);
  border-right: 1px solid var(--md-sys-color-outline);
}

.menu-nav {
  background: var(--md-sys-color-surface-container);
}

.portrait {
  transition: all var(--md-sys-motion-duration-long1) var(--md-sys-motion-easing-standard);
  border: 4px solid var(--md-sys-color-primary);
  box-shadow: 0 0 32px rgba(238, 206, 26, 0.2);
}

.nav-item {
  margin: 1rem 0;
}

.nav-link {
  transition: all var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard);
  padding: 0.75rem 2.5rem;
  border-radius: var(--md-sys-shape-corner-full);
  font-weight: 700;
  font-size: 2.25rem;
  color: var(--md-sys-color-on-surface-variant);
}

.nav-item.current .nav-link {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
}

.nav-link:hover {
  background: var(--md-sys-color-surface-container-highest);
  color: var(--md-sys-color-primary);
  transform: translateX(12px);
}
</style>


