<script setup>
useHead({
  title: "Get In Touch | Contact Yusuf Mbonigaba",
  meta: [
    { name: 'description', content: 'Interested in working together? Reach out to Yusuf Mbonigaba via email, phone, or find his coordinates in Kigali, Rwanda.' }
  ]
})
</script>

<template>
  <main id="contact">
    <h1 class="lg-heading">Contact <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">This is how you can reach me...</h2>
    
    <div class="contact-grid">
      <div class="contact-card surface-container">
        <i class="fas fa-envelope icon"></i>
        <h3 class="text-secondary">Email</h3>
        <p>mbonigabay@gmail.com</p>
      </div>
      
      <div class="contact-card surface-container">
        <i class="fas fa-mobile-alt icon"></i>
        <h3 class="text-secondary">Phone</h3>
        <p>(078) 160-7680</p>
      </div>
      
      <div class="contact-card surface-container">
        <i class="fas fa-map-marker-alt icon"></i>
        <h3 class="text-secondary">Address</h3>
        <p>KK 174 st Kicukiro, Kigali</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 5rem;
}

@media screen and (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.contact-card {
  padding: 4rem 2rem;
  text-align: center;
  transition: all var(--md-sys-motion-duration-medium1) var(--md-sys-motion-easing-standard);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.surface-container {
  background: var(--md-sys-color-surface-container);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-extra-large);
}

.contact-card:hover {
  transform: translateY(-12px);
  background: var(--md-sys-color-surface-container-high);
  border-color: var(--md-sys-color-primary);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
}

.icon {
  font-size: 3.5rem;
  color: var(--md-sys-color-primary);
}

.contact-card h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
  color: var(--md-sys-color-on-surface);
}

.contact-card p {
  color: var(--md-sys-color-on-surface-variant);
  font-size: 1.25rem;
  line-height: 1.5;
  word-break: break-all;
}
</style>
