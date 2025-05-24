<template>
  <main id="about">
    <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">Let me tell you a few things...</h2>
    <div class="about-info">
      <img
        src="../assets/img/portrait-1.jpg"
        alt="Yusuf Mbonigaba"
        class="bio-image"
      />
      <div class="bio">
        <h3 class="text-secondary">BIO</h3>
        <p>
          {{ bio }}
        </p>
      </div>
      <div v-bind:key="index" v-for="(experience, index) in experiences">
        <div
          class="job job-1"
          style="display: flex; flex-direction: column; min-height: 200px"
        >
          <h3>
            {{ experience.companyName }}, {{ experience.companyLocation }}
          </h3>
          <h5>{{ experience.jobTitle }}</h5>
          <div
            v-html="$marked(experience.jobDescription)"
            style="flex-grow: 1"
          />
          <span style="font-weight: 600; margin-top: auto">{{
            experience.period
          }}</span>
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

const { data: experiences } = await useFetch("/api/experiences", {
  transform: (data) => data.sort((a, b) => b.id - a.id),
});
const { data: bio } = await useFetch("/api/bio");
</script>

