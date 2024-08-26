<template>
  <div class="cont-card" >
    <img :src="img" alt="">
    <h1>{{ title  }}</h1>
    <p>{{ par }}</p>
    <router-link to="/contact" class="uniq" >Get Started</router-link>
  </div>
</template>

<script>
export default {
    props:['svg','title','par','img']
}
</script>

<style>

</style>