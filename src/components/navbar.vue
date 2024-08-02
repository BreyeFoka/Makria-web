<template>
  <div class="nav">
    <router-link to="/" >
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
        <h1>MAKRIA</h1>
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

</style>