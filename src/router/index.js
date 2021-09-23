import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../views/Header.vue'
import OurWork from '../views/OurWork.vue'
import OurTeam from '../views/OurTeam.vue'
import Feature from '../views/Feature.vue'
import ContactUs from '../views/ContactUs.vue'
import Footer from '../views/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/header',
    name: 'Headerv' ,
    component: Header,
  },
  {
    path: '/ourwork',
    name: 'OurWorkv' ,
    component: OurWork ,
  },
  {
    path: '/ourteam',
    name: 'ourteamv' ,
    component: OurTeam ,
  },
  {
    path: '/feature',
    name: 'featurev' ,
    component: Feature ,
  },
  {
    path: '/contactus',
    name: 'ContactUsv' ,
    component: ContactUs ,
  },
  {
    path: '/footer',
    name: 'footerv' ,
    component: Footer ,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
