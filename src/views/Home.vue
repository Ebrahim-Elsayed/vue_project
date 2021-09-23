<template>
<div class="App">
    <Header/>
    <OurTeam/>
    <OurWork/>
    <Feature/>
    <ContactUs/>
    <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import OurTeam from '@/components/OurTeam.vue'
import OurWork from '@/components/OurWork.vue'
import Feature from '@/components/Feature.vue'
import ContactUs from '@/components/ContactUs.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header ,
    OurTeam ,
    OurWork ,
    Feature ,
    ContactUs,
    Footer ,
  },
  
}
</script>


