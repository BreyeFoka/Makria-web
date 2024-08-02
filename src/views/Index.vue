<template>
  <div>
    <Navbar />
    <div class="content">
      <div class="content-words">
        <h1>Transforming Brands with Creativity and Excellence</h1>
        <p>
          We're a dynamic team fueled by passion and creativity, committed to
          transforming your ideas into reality.
        </p>
      </div>
      <img src="../assets/img/bg-3.png" alt="" />
      <div class="activity">
        <Activity num="0+" project="completed" />
        <Activity num="3+" project="year of experience" />
        <Activity num="0%" project="client satisfaction" />
        <Activity num="24x7" project="completed" />
      </div>
    </div>
    <div class="services">
      <div class="services-words">
        <h4>services</h4>
      <h1>High-impact design & development services</h1>
      <p>We partner with you to craft a successful business model that authentically reflects your unique vision while achieving your desired conversion goals.</p>
      <router-link to="" class="uniq" >see pricing options</router-link>
      </div>
      <div class="services-card-cont">
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import Activity from "@/components/ActivityCard.vue"
import ServiceCard from "@/components/ServiceCard.vue";
export default {
    components:{
        Navbar,
        Footer,
    }
}
  components: {
    Navbar,
    Footer,
    Activity,
    ServiceCard
  },
};
</script>

<style></style>
