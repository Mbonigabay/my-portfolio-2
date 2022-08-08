<template>
    <main id="about">
      <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
      <h2 class="sm-heading">Let me tell you a few things...</h2>
      <div class="about-info">
        <img src="img/portrait-1.jpg" alt="Yusuf Mbonigaba" class="bio-image" />
        <div class="bio">
          <h3 class="text-secondary">BIO</h3>
          <p>
            I am a software developer with a bachelor degree in Information Technology with
            major in Software engineering and currently, working as an application developer at REG/EUCL
            
          </p>
        </div>
        <div class="job job-1">
          <h3>Nyabiheke Coding SChool, Gatsibo</h3>
          <h5>Learning Facilitator</h5>
          <p>
            I taught PHP, Java and Python to programming beginners in this coding school.
          </p>
          <span style="font-weight: 600;">JAN 2020- MARCH 2020</span>
        </div>
        <div class="job job-2">
          <h3>VNG Technology Limited, Kigali</h3>
          <h5>Fullstack software developer</h5>
          <p>
            I analyse, design , develop and deploy Spring Boot applications.
          </p>
          <span style="font-weight: 600;">MAY 2020- OCT 2020</span>
        </div>
        <div class="job job-3">
          <h3>Energy Utility Corporation Limited, Kigali</h3>
          <h6>Application developer</h6>
          <p>
            I analyse, design , develop and deploy software applications.
          </p>
          <span style="font-weight: 600;">OCT 2020- NOW</span>
        </div>
      </div>
    </main>
</template>
<script setup>
onMounted(() => {
    showMenu = true;
    toggleMenu()
});
</script>