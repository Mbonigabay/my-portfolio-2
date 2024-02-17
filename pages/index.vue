<template>
  <div>
    <main id="home">
      <h1 class="lg-heading">
        Yusuf <span class="text-secondary">Mbonigaba</span>
      </h1>
      <h2 class="sm-heading">Software Engineer</h2>
      <div class="icons">
        <span v-bind:key="index" v-for="(social, index) in socials">
          <a
            v-if="social.status === 'active'"
            target="_blank"
            :href="`${social.link}`"
          >
            <i class="fab fa-2x" :class="`${social.icon}`"></i>
          </a>
        </span>
      </div>
    </main>
  </div>
</template>
<script setup>
onMounted(() => {
  showMenu = true;
  toggleMenu();
});

const { data: socials } = await useFetch("/api/socials");
</script>
