<template>
    <main id="work">
      <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
      <h2 class="sm-heading">Check out some of my projects</h2>
     <div class="projects">
         <div class="item">
             <a target="_blank" href="https://empeta.rw">
                 <img src="../assets/img/projects/empeta.jpg" alt="Project">
             </a>
             <a target="_blank" href="https://empeta.rw" class="btn-light">
                 <i class="fas fa-eye"></i> empeta.rw
             </a>
             <a target="_blank" href="#" class="btn-dark" >
                 <i class="fab fa-github"></i> Github
             </a>
         </div>
         <div class="item">
            <a target="_blank" href="https://mbonigabayusuf.netlify.app">
                <img src="../assets/img/projects/port.jpg" alt="Project">
            </a>
            <a target="_blank" href="https://mbonigabayusuf.netlify.app" class="btn-light">
                <i class="fas fa-eye"></i> mbonigabayusuf.netlify.app
            </a>
            <a target="_blank" href="https://github.com/Mbonigabay/modern-portofolio" class="btn-dark" >
                <i class="fab fa-github"></i> Github
            </a>
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