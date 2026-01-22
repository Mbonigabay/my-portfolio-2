<template>
  <main id="about">
    <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">Let me tell you a few things...</h2>
    
    <div class="about-grid">
      <!-- Left Column: Bio & Socials -->
      <div class="about-left">
        <div class="bio-card surface-container">
          <div class="bio-header">
            <h3 class="text-secondary">BIO</h3>
            <div class="bio-tag">Software Engineer</div>
          </div>
          <div class="bio-content">
            <p class="main-bio">{{ bio }}</p>
            
            <div class="cta-section">
              <span class="cta-text">Let's Connect</span>
              <div class="social-links-about">
                <a v-for="social in activeSocials" :key="social.name" :href="social.link" target="_blank" class="social-icon">
                  <i :class="['fab', social.icon]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Timeline -->
      <div class="about-right">
        <h3 class="section-title">My Journey</h3>
        <div class="experience-timeline">
          <div v-for="(experience, index) in experiences" :key="index" class="experience-card surface-container">
            <div class="timeline-dot"></div>
            <div class="experience-header">
              <h4>{{ experience.jobTitle }}</h4>
              <span class="experience-period">{{ experience.period }}</span>
            </div>
            <h5 class="text-secondary">{{ experience.companyName }}, {{ experience.companyLocation }}</h5>
            <div class="experience-body" v-html="$marked(experience.jobDescription)"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { data: experiences } = await useFetch("/api/experiences", {
  transform: (data) => data.sort((a, b) => b.id - a.id),
});
const { data: bio } = await useFetch("/api/bio");
const { data: socials } = await useFetch("/api/socials");

const activeSocials = computed(() => socials.value?.filter(s => s.status === 'active') || []);

useHead({
  title: "About Yusuf Mbonigaba | Engineering Journey",
  meta: [
    { name: 'description', content: "Learn more about Yusuf Mbonigaba's professional experience, skills, and his journey as a software engineer in Kigali, Rwanda." }
  ]
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  margin-top: 4rem;
}

@media screen and (max-width: 1100px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.surface-container {
  background: var(--md-sys-color-surface-container);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-extra-large);
  overflow: hidden;
}

/* Left Column Styles */
.bio-card {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  transition: all var(--md-sys-motion-duration-medium1) ease;
  position: sticky;
  top: 100px;
}

.bio-card:hover {
  transform: translateY(-4px);
  background: var(--md-sys-color-surface-container-high);
  border-color: var(--md-sys-color-primary);
}

.bio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.bio-tag {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  padding: 0.5rem 1.25rem;
  border-radius: var(--md-sys-shape-corner-full);
  font-size: 0.8rem;
  font-weight: 700;
}

.main-bio {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 3.5rem;
  font-weight: 300;
}

.cta-section {
  border-top: 1px solid var(--md-sys-color-outline);
  padding-top: 2rem;
}

.cta-text {
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--md-sys-color-on-surface-variant);
  margin-bottom: 2rem;
}

.social-links-about {
  display: flex;
  gap: 2rem;
}

.social-icon {
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--md-sys-color-surface-container-highest);
  border-radius: var(--md-sys-shape-corner-full);
  font-size: 1.5rem;
  color: var(--md-sys-color-on-surface);
  transition: all var(--md-sys-motion-duration-short2) ease;
}

.social-icon:hover {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  transform: scale(1.1);
}

/* Right Column Styles */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 800;
  color: var(--md-sys-color-primary);
  letter-spacing: -0.02em;
}

.experience-timeline {
  position: relative;
  border-left: 2px solid var(--md-sys-color-outline);
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.experience-card {
  padding: 2.5rem;
  position: relative;
  transition: all var(--md-sys-motion-duration-medium1) ease;
}

.experience-card:hover {
  background: var(--md-sys-color-surface-container-highest);
  transform: translateX(12px);
  border-color: var(--md-sys-color-primary);
}

.timeline-dot {
  position: absolute;
  left: -4rem;
  margin-left: -13px;
  top: 2.5rem;
  width: 24px;
  height: 24px;
  background: var(--md-sys-color-surface);
  border: 4px solid var(--md-sys-color-primary);
  border-radius: 50%;
  z-index: 2;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.experience-header h4 {
  font-size: 1.75rem;
  color: var(--md-sys-color-on-surface);
  font-weight: 700;
  line-height: 1.2;
}

.experience-period {
  font-size: 0.85rem;
  color: var(--md-sys-color-on-primary-container);
  font-weight: 700;
  background: var(--md-sys-color-primary-container);
  padding: 0.5rem 1rem;
  border-radius: var(--md-sys-shape-corner-small);
  white-space: nowrap;
}

.experience-body {
  margin-top: 1.5rem;
  color: var(--md-sys-color-on-surface-variant);
  font-size: 1.1rem;
  line-height: 1.7;
}

.experience-body :deep(li) {
  margin-bottom: 1rem;
}

:deep(.text-secondary) {
  color: var(--md-sys-color-primary);
  font-weight: 700;
}
</style>

