<template>
  <header>
    <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <div :key="index" v-for="(navlink, index) in navlinks">
          <li
            v-if="navlink.status === 'active'"
            class="nav-item"
            :class="{ current: route.path === navlink.link }"
          >
            <nuxt-link :to="`${navlink.link}`" class="nav-link">
              {{ navlink.name }}
            </nuxt-link>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>
<script setup>
const route = useRoute();
const { data: navlinks } = await useFetch("/api/navlinks");
</script>
