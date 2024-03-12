import { useRouter, createRouter, createWebHistory } from 'vue-router'
// English path 
import EnHomeView from '../views/en/HomeView.vue'
import EnAboutView from '../views/en/AboutView.vue'
import EnProjectView from '../views/en/ProjectView.vue'
import EnResumeView from '../views/en/ResumeView.vue'

// Portuguese path
import HomeView from '../views/pt/HomeView.vue'
import AboutView from '../views/pt/AboutView.vue'
import ProjectView from '../views/pt/ProjectView.vue'
import ResumeView from '../views/pt/ResumeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'padrao',
      component: HomeView
    },
    {
      path: '/en/',
      name: 'home',
      component: EnHomeView
    },
    {
      path: '/sobre-mim',
      name: 'sobre-mim',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView 
    },
    {
      path: '/en/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EnAboutView 
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjectView 
    },
    {
      path: '/en/projects',
      name: 'projects',
                                                             
      component: EnProjectView 
    },
    {
      path: '/cv',
      name: 'cv',
      
      component: ResumeView 
    },
    {
      path: '/en/resume',
      name: 'resume',
      
      component: EnResumeView 
    },
  ]
})

export default router
