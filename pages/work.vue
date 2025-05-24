<template>
  <main id="work">
    <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
    <h2 class="sm-heading">Check out some of my projects</h2>
    <div class="projects">
      <div v-bind:key="index" v-for="(project, index) in projects">
        <div class="item">
          <a target="_blank" :href="`${project.link}`">
            <img :src="`${project.screenshot}`" alt="Project" />
          </a>
          <a target="_blank" :href="`${project.link}`" class="btn-light">
            <i class="fas fa-eye"></i> {{ project.name }}
          </a>
          <a
            target="_blank"
            :href="`${project.github}`"
            class="btn-dark tooltip"
          >
            <i class="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
const showMenu = ref(false);

onMounted(() => {
  showMenu.value = true;
  toggleMenu();
});

const { data: projects } = await useFetch("/api/projects");
</script>
