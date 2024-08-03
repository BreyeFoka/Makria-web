<template>
    <head>
        <title>about us</title>
    </head>
  <div>
    <Navbar />
    <div class="content">
      <div class="content-words">
        <h1 class="h1">Crafting Your <span>Digital Success</span></h1>
        <p>
          We're a dynamic team fueled by passion and creativity, committed to
          transforming your ideas into reality.
        </p>
        <router-link to="/contacts" class="uniq">get started</router-link>
      </div>
      <img src="../assets/img/bg-4.png" alt="" />
    </div>
    <div class="cont">
      <div class="cont-words">
        <h4>our vision</h4>
        <h1>Our Values</h1>
        <p>
          We partner with you to craft a successful business model that
          authentically reflects your unique vision while achieving your desired
          conversion goals.
        </p>
      </div>
      <div class="cont-card-cont">
        <Card 
            img="../assets/img/bg-2.png"
            title="Customer Centric"
            par="Our primary focus is on our clients' needs. We emphasise identifying their specific obstacles and goals, modifying our strategies to offer personalised service."
        />
        <Card 
            title="Accuracy"
            par="We are committed to nurturing robust alliances. Through close collaboration with our clients, we establish cooperative connections based on transparent communication and mutual esteem."
        />
        <Card 
            title="Innovation"
            par="Demands and preferences of customers are always evolving, necessitating a creative approach to provide value and cater to their requirements."
        />
        <Card 
            title="Maintaining Simplicity"
            par="We prioritize ethical standards, transparency, and authenticity in all interactions. Our operations are built on integrity,"
        />
      </div>
    </div>
    <div class="cont-2">
        <div class="cont-2-words">
            <h4>our mission</h4>
            <h1>Bridging the digital skill divide</h1>
            <p>We believe in the power of personal stories, and here, we celebrate voices that often go unheard.</p>
            <router-link to="/contact" class="uniq" >join our team</router-link>
        </div>
        <img src="../assets/img/bg-2.png" alt="">
    </div>
    <div class="cont">
        <div class="cont-words">
            <h4>our team</h4>
            <h1>The Brilliant Minds Driving Our Success</h1>
            <p>We're more than just a service provider; we're a team of passionate professionals who are committed to helping you unlock your brand's full potential.</p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    Navbar,
    Footer,
    Card,
  },
  data(){
    return{
        svg_1:''
    }
  }
};
</script>

<style>
</style>