<!-- <template>
  <div class="nav">
    <router-link to="/" >
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
        <h1 class="font-bold ">MAKRIA</h1>
      </div>
    </router-link>
    <div class="nav-links">
        <router-link to="/about" >about</router-link>
        <router-link to="/about" >services</router-link>
        <router-link to="/projects">projects</router-link>
        <router-link class="uniq" to="/contact">talk to us</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style> -->


<template>
  <div :style="{ opacity: opacity }" class="nav">
    <router-link to="/" >
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
        <h1 class="font-bold ">MAKRIA</h1>
      </div>
    </router-link>
    <div class="nav-links flex">
        <div class="px-2">
          <router-link to="/about" >About</router-link>
          <router-link to="/about" >Services</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link class="uniq px-2" to="/contact">Talk to Us</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 1,  // Initial opacity
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const maxScroll = 200;  // Maximum scroll value for full fade-out
      const scrollPosition = window.scrollY;

      setTimeout(() => {
        this.opacity = Math.max(0, 1 - scrollPosition / maxScroll);
      }, 150);  // Adding a delay before changing opacity
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.nav {
  @apply fixed top-0 w-full flex justify-between items-center p-4  transition-opacity duration-300 ease-in-out;
}

.logo {
  @apply flex items-center space-x-2;
}

.nav-links {
  @apply flex space-x-6;
}

.uniq {
  @apply text-blue-600 font-bold;
}
</style>