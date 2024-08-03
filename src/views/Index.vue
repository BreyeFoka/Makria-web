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
    <div class="cont">
      <div class="cont-words">
        <h4>services</h4>
        <h1>High-impact design & development services</h1>
        <p>We partner with you to craft a successful business model that authentically reflects your unique vision while
          achieving your desired conversion goals.</p>
        <router-link to="" class="uniq">see pricing options</router-link>
      </div>
      <div class="cont-card-cont">
        <Card 
        title="web design" 
        par="We design websites that look amazing, convey the right brand message and are highly oriented for conversion." 
        />
        <Card 
        title="Web Development" 
        par="We develop fast, perfectly responsive, and SEO-optimized websites built with the best development practices." 
        />
        <Card 
        title="UI/UX Design" 
        par="We design intuitive web & mobile apps focused on driving user engagement and increasing users retention." 
        />
        <Card 
        title="Brand Design" 
        par="We transform businesses into world-class brands by going through a well thought brand identity design process." 
        />
        <Card 
        title="Advertising and Marketing" 
        par="We focus on promoting products, services, and brands to target audiences. It involves a blend of creativity, strategy, and data analysis to create compelling campaigns that drive consumer engagement and sales." 
        />
      </div>
    </div>
    <div class="cont">
     <div class="cont-words">
      <h4>our work</h4>
      <h1>Let our work speak for itself</h1>
      <p>Your vision, our expertise. We collaborate to craft impactful Shopify solutions within your timeframe and budget, propelling your business ambitions forward.</p>
      <router-link to="/projects" class="uniq" >view all projects</router-link>
     </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import Activity from "@/components/ActivityCard.vue"
import Card from "@/components/Card.vue";
export default {
  components: {
    Navbar,
    Footer,
    Navbar,
    Activity,
    Card
  }
}
</script>

<style></style>
