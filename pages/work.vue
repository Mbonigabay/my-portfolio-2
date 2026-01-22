<template>
  <main id="work">
    <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
    <h2 class="sm-heading">Check out some of my projects</h2>
    <div class="projects">
      <div v-for="(project, index) in activeProjects" :key="index" class="project-card" @click="openModal(project)">
        <div class="card-badges" v-if="project.stack">
          <span class="badge" :class="project.stack[0].toLowerCase()">{{ project.stack[0] }}</span>
        </div>
        <div class="project-img-container">
          <img :src="`${project.screenshot}`" :alt="project.name" class="bg-img" />
          <div class="img-overlay">
            <span class="view-project">View Details</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ project.name }}</h3>
          <div class="project-meta">
            <span>Read More</span>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <WorkModal
      v-if="selectedProject"
      :project="selectedProject"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </main>
</template>

<script setup>
const isModalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const { data: projects } = await useFetch("/api/projects");

const activeProjects = computed(() => {
  return projects.value?.filter(p => p.status === 'active') || [];
});

useHead({
  title: "Selected Projects | Yusuf's Work",
  meta: [
    { name: 'description', content: "A curated collection of web development projects, featuring modern stacks like Nuxt.js, Vue, and Docker. Each project showcases Yusuf Mbonigaba's engineering excellence." }
  ]
})
</script>

<style scoped>
.projects {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 1400px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1024px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .projects {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.project-card {
  cursor: pointer;
  background: var(--md-sys-color-surface-container);
  border-radius: var(--md-sys-shape-corner-extra-large);
  border: 1px solid var(--md-sys-color-outline);
  transition: all var(--md-sys-motion-duration-long1) var(--md-sys-motion-easing-standard);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  background: var(--md-sys-color-surface-container-high);
  border-color: var(--md-sys-color-primary);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
}

.badge {
  padding: 0.35rem 0.85rem;
  border-radius: var(--md-sys-shape-corner-full);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 0.25px;
  color: var(--md-sys-color-on-primary-container);
  background: var(--md-sys-color-primary-container);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.project-img-container {
  width: 100%;
  aspect-ratio: 16 / 10;
  position: relative;
  overflow: hidden;
  /* Match the card's top corners */
  border-top-left-radius: var(--md-sys-shape-corner-extra-large);
  border-top-right-radius: var(--md-sys-shape-corner-extra-large);
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--md-sys-motion-duration-long1) var(--md-sys-motion-easing-standard);
}

.project-card:hover .bg-img {
  transform: scale(1.08);
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard);
}

.project-card:hover .img-overlay {
  opacity: 1;
}

.view-project {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 0.6rem 1.25rem;
  font-weight: 700;
  border-radius: var(--md-sys-shape-corner-medium);
  font-size: 0.8rem;
}

.project-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.project-title {
  font-size: 1.25rem;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--md-sys-color-outline);
  padding-top: 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--md-sys-color-on-surface-variant);
  transition: color var(--md-sys-motion-duration-short2) ease;
}

.project-card:hover .project-meta {
  color: var(--md-sys-color-primary);
}
</style>
