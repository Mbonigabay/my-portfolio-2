<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <button class="close-btn" @click="$emit('close')">&times;</button>
        <div class="modal-body">
          <!-- Media Section (Top) -->
          <div class="modal-image">
            <img 
              v-if="!videoLoaded || !project.video" 
              :src="project.screenshot" 
              :alt="project.name" 
              class="fallback-img"
            />
            <video 
              v-if="project.video"
              :src="project.video"
              autoplay
              muted
              loop
              playsinline
              class="demo-video"
              @loadeddata="videoLoaded = true"
            ></video>
          </div>

          <!-- Info Section (Bottom) -->
          <div class="modal-info">
            <h2 class="text-secondary">{{ project.name }}</h2>
            
            <div class="project-stack" v-if="project.stack && project.stack.length">
              <span v-for="item in project.stack" :key="item" class="stack-item">
                {{ item }}
              </span>
            </div>

            <p class="description">{{ project.description }}</p>

            <div class="modal-links">
              <!-- Case 1: Live Link available -->
              <a v-if="project.link" :href="project.link" target="_blank" class="btn-light">
                <i class="fas fa-eye"></i> Visit Site
              </a>

              <!-- Case 2: Docker Compose Path available -->
              <button 
                v-else-if="project.dockerPath" 
                @click="copyDocker(project.dockerPath)" 
                class="btn-light"
                :class="{ 'btn-success': copied }"
                :disabled="isFetching"
              >
                <i class="fas" :class="copied ? 'fa-check' : (isFetching ? 'fa-spinner fa-spin' : 'fa-copy')"></i> 
                {{ copied ? 'Copied!' : (isFetching ? 'Fetching...' : 'Copy Docker Compose') }}
              </button>

              <!-- Case 3: Inline Docker available (Legacy support) -->
              <button 
                v-else-if="project.docker" 
                @click="copyDockerContent(project.docker)" 
                class="btn-light"
                :class="{ 'btn-success': copied }"
              >
                <i class="fas" :class="copied ? 'fa-check' : 'fa-copy'"></i> 
                {{ copied ? 'Copied!' : 'Copy Docker Compose' }}
              </button>

              <!-- Case 4: Neither available -->
              <button v-else disabled class="btn-light btn-disabled">
                <i class="fas fa-times-circle"></i> No Live Demo
              </button>

              <a :href="project.github" target="_blank" class="btn-dark">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const videoLoaded = ref(false)
const copied = ref(false)
const isFetching = ref(false)

const copyDocker = async (path) => {
  isFetching.value = true
  try {
    const response = await fetch(path)
    if (!response.ok) throw new Error('Network response was not ok')
    const content = await response.text()
    await copyToClipboard(content)
  } catch (err) {
    console.error('Failed to fetch or copy: ', err)
  } finally {
    isFetching.value = false
  }
}

const copyDockerContent = async (content) => {
  await copyToClipboard(content)
}

const copyToClipboard = async (content) => {
  try {
    await navigator.clipboard.writeText(content)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 13, 19, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
}

.modal-content {
  background: var(--md-sys-color-surface-container-high);
  border: 1px solid var(--md-sys-color-outline);
  padding: 2.5rem;
  border-radius: var(--md-sys-shape-corner-extra-large);
  width: 95%;
  max-width: 900px;
  position: relative;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
  max-height: 90vh;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
  transition: color var(--md-sys-motion-duration-short2) ease;
  z-index: 10;
}

.close-btn:hover {
  color: var(--md-sys-color-primary);
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.modal-image {
  position: relative;
  overflow: hidden;
  border-radius: var(--md-sys-shape-corner-large);
  border: 1px solid var(--md-sys-color-outline);
  background: var(--md-sys-color-surface-container-lowest);
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image img,
.modal-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 0 0.5rem;
}

.modal-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: var(--md-sys-color-primary);
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.stack-item {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  padding: 0.5rem 1.25rem;
  border-radius: var(--md-sys-shape-corner-full);
  font-size: 0.9rem;
  font-weight: 700;
}

.description {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: var(--md-sys-color-on-surface-variant);
}

.modal-links {
  display: flex;
  gap: 1.5rem;
}

.modal-links .btn-light,
.modal-links .btn-dark {
  flex: 1;
  text-align: center;
  padding: 1.15rem;
  border-radius: var(--md-sys-shape-corner-full);
  font-weight: 700;
  transition: all var(--md-sys-motion-duration-medium1) var(--md-sys-motion-easing-standard);
  cursor: pointer;
  font-size: 1rem;
}

.btn-light {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border: none;
}

.btn-light:hover:not(.btn-disabled) {
  background: #f7e155;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(238, 206, 26, 0.2);
}

.btn-dark {
  background: var(--md-sys-color-surface-container-highest);
  color: var(--md-sys-color-on-surface);
  border: 1px solid var(--md-sys-color-outline);
}

.btn-dark:hover {
  background: var(--md-sys-color-surface-container-low);
  transform: translateY(-4px);
}

.btn-success {
  background: #2ea44f !important;
  color: white !important;
}

.btn-disabled {
  opacity: 0.4;
  cursor: not-allowed !important;
  background: var(--md-sys-color-surface-variant) !important;
  color: var(--md-sys-color-on-surface-variant) !important;
  border: none !important;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--md-sys-motion-duration-long1) var(--md-sys-motion-easing-standard);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform var(--md-sys-motion-duration-long1) var(--md-sys-motion-easing-standard);
}

.modal-enter-from .modal-content {
  transform: scale(0.9) translateY(20px);
}

.modal-leave-to .modal-content {
  transform: scale(0.9) translateY(20px);
}
</style>
