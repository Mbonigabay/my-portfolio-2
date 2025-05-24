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
const showMenu = ref(false);

onMounted(() => {
  showMenu.value = true;
  toggleMenu();
});

const { data: socials } = await useFetch("/api/socials");
</script>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is the homepage for Yusuf Mbonigaba Portofolio",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Yusuf, Mbonigaba, Yusuf Mbonigaba, Software developer, Software engineer, Rwanda , Kigali",
        },
        {
          hid: "author",
          name: "author",
          content: "Yusuf Mbonigaba",
        },
        {
          name: "google-site-verification",
          content: "8xVi7BzoHKMXDV9BwHlh7jx4i1FDt8oLAJsBaIdZiCQ",
        },
      ],
    };
  },
};
</script>