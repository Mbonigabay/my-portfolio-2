<template>
  <main id="contact">
    <h1 class="lg-heading">Contact <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">This is how you can reach me...</h2>
    <div class="boxes">
      <div>
        <span class="text-secondary">Email:</span>
        mbonigabay@gmail.com
      </div>
      <div>
        <span class="text-secondary">Phone:</span>
        (078) 160-7680
      </div>
      <div>
        <span class="text-secondary">Address:</span>
        KK 174 st Kicukiro
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
</script>
