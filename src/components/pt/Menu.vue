<script> 
import Github from "./../icons/IconGithub.vue";
import Linkedin from "./../icons/IconLinkedin.vue";
import IconItem from "./IconItem.vue";
import Logo from "./../icons/Logo.vue";
import Dark from "./../icons/IconDark.vue";
import Light from "./../icons/IconLight.vue";
import Menu from "./../icons/IconMenu.vue";
import Sidebar from "./../pt/Sidebar.vue";
import Close from "./../icons/IconClose.vue";
import { useRouter } from 'vue-router';

export default {
    name: "EnglishMenu",
    components: {
      Github,
      Linkedin,
      IconItem,
      Logo,
      Dark,
      Light,
      Menu,
      Sidebar,
      Close
    },
    data() {
      return {
        isDarkTheme: Boolean,
        isExpanded: this.isExpanded,
        router: useRouter(),
        path: "" 
      }
    },
    methods: {
      toggleTheme (e) {
        if (document.documentElement.classList.contains("light")) {
          document.documentElement.classList.remove("light")
          document.documentElement.classList.add("dark")
          this.isDarkTheme = true
        } else if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark")
          document.documentElement.classList.add("light")
          this.isDarkTheme = false 
        } else {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("light")
            this.isDarkTheme = true 
          } else {
            document.documentElement.classList.add("dark")
            this.isDarkTheme = false 
          }
        }
      },
      checkTheme() {
        window.matchMedia('(prefers-color-scheme: dark)').matches
      },
      changeToPortuguese(){
        const path = this.router.currentRoute.path
        if(path !== '/'){
          this.isEnglish = !this.isEnglish 
          this.router.push('/') 
        }
      },
      redirectHome() {
        const path = this.router.currentRoute.path
        if(path != '/en'){
          this.router.push('/')
        } else {
          this.router.push('/en')
        }
      },
      changeToEnglish(){
        const path = this.router.currentRoute.path
        if(path !== '/en'){
          this.isEnglish = !this.isEnglish 
          this.router.push('/en') 
        }
      },
    },
    mounted: function(){
      this.isDarkTheme = this.checkTheme()
      // Global variables
      this.isEnglish = false 
      this.isExpanded = false
    },
}
</script>

<template>
  <Sidebar :isExpanded="isExpanded"/>
  <i>
    <Close id="close" v-if="isExpanded" @click="isExpanded = !isExpanded"/>
  </i>
  <header id="header">
    <div class="logo-container" @click="redirectHome">
     <Logo id="logo-photo"/>
     <div class="flex-column">
       <h3 id="logo">Marcos</h3>
       <small>marcos-c1</small>
     </div>
    </div>
    <i>
      <Menu id="hamburguer-menu" @click="isExpanded = !isExpanded" />
    </i>
    <div class="page-container">
      <div id="pt-btn" :class="!isEnglish ? 'active' : ''" @click="changeToPortuguese">
        <span>
          PT
        </span>
      </div>
      <div id="en-btn" :class="isEnglish ? 'active' : ''" @click="changeToEnglish">
        <span>
          EN
        </span>
      </div>
    </div>
    <div id="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sobre-mim">Sobre mim</RouterLink>
      <RouterLink to="/projetos">Projetos</RouterLink>
      <RouterLink to="/cv">Curriculo</RouterLink>
    </div>
    <div id="icons">
      <div class="theme-container" @click="toggleTheme">
        <i v-if="isDarkTheme">
          <Light />
        </i>
        <i v-else>
          <Dark/>
        </i>
      </div>
      <div class="social-container">
        <IconItem site="linkedin" link="https://www.linkedin.com/in/marcos-bezerra-campos-981927196/">
          <template #icon>
            <Linkedin/>
          </template>
        </IconItem>
        <IconItem site="github" link="https://www.github.com/marcos-c1/">
          <template #icon>
            <Github/>
          </template>
        </IconItem>
      </div>
    </div>
  </header>
</template>

<style scoped>

.social-container {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center; 
  white-space: nowrap;
  user-select: none;
}

.logo-container:hover {
  cursor: pointer;
}

.disable {
  display: none;
}

#close {
  position: fixed;
  right: 12em;
  top: 0;
  z-index: 99;
  border-radius: 10px;                  
  margin: 5px;
  padding: 10px;
  font-weight: bolder;
  margin-top: 1em;
}

#close:hover {
  cursor: pointer;
}

.page-container {
  display: flex;
  flex-direction: row;
  align-items: center; 
  background-color: var(--color-border);
  border-radius: 10px;
  margin-right: 2em;
  padding: 5px 10px;
}

#hamburguer-menu {
  display: none;
  background-color: var(--color-border);
  border-radius: 5px;                  
  padding: 4px;
}

#pt-btn {
  width: 100%;
  height: 100%;
  margin-right: 0.5em;
  padding-right: 10px;
  border-right: 5px solid var(--color-border);
}

#en-btn {
  width: 100%;
  height: 100%;
}

#pt-btn:hover {
  cursor: pointer;
  color: var(--color-secondary);
}

#en-btn:hover {
  cursor: pointer;
  color: var(--color-secondary);
}

.active {
  color: var(--color-secondary);
}

.theme-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  background-color: var(--color-border);
  border-radius: 2em;
  margin-right: 1em;
  width: 35px;
  height: 35px;
  margin-top: 5px;
  padding-top: 15px;
}

.theme-container:hover {
  cursor: pointer;
  background-color: var(--color-heading);
}

#hamburguer-menu:hover {
  cursor: pointer;
  background-color: var(--color-secondary);
}

#logo-photo {
  position: relative;
  margin-top: 0.7em;
  margin-right: 0.5em;
  animation: levitate 3s infinite backwards; 
  color: var(--color-secondary);
  font-weight: bolder;
  width: 70px;
  height: 70px;
} 

#logo {
  color: var(--color-heading);
}

@keyframes levitate {
  0% {
    padding-bottom: 0;
  }
  25% {
    padding-bottom: 1px;
    width: 72px;
    height: 72px;
  }
  50% {
    padding-bottom: 3px;
  }
  75% {
    padding-bottom: 8px;
      width: 72px;
      height: 72px;
  }
  100% {
    padding-bottom: 0;
     width: 70px;
     height: 70px;
  }
}

a {
  cursor: pointer;
  color: var(--color-heading);
  margin-right: 3em;
}

a:hover {
  color: var(--color-secondary);
  background: none;
}

#header {
  white-space: nowrap; 
  font-family: inherit;
  font-size: 1.1em;
  color: var(--color-text);
  top: 0;
  display: flex;
  overflow: hidden;
  justify-content: space-between; 
  flex-direction: row;
  position: fixed;
  z-index: 1;
  background: transparent; 
  padding: 0 15em;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-secondary); 
  width: 100%;
  height: 80px;
}


#icons {
  display: flex;
}

@media(max-width: 1550px){
  #header {
    font-size: 1em;
  }
}

@media(max-width: 1450px){
  #header {
    padding: 0 10em;
  }
}

@media(max-width: 1300px){
  #header {
    padding: 0 5em;
  }
}

@media(max-width: 1150px){
  #header {
    padding: 0;
  }
}

@media(max-width: 1000px){
  #header {
    font-size: 0.9em;
  }
}

@media(max-width: 900px){
  .page-container {
    margin-right: 0em;
    padding: 5px 5px;
    font-size: 0.8em;
  }

  #pt-btn {
    margin-right: 0;
    padding-right: 5px;
  }

  #en-btn {
    margin-left: 5px;
  }

  #links > a{
    padding: 0;
    margin-right: 2em;
  }
}

@media(max-width: 800px){
  .social-container {
    display: none;
  }
}

@media(max-width: 700px){
  #links > a {
    margin-right: 1.3em;
  }
}

@media(max-width: 650px) {
  #links {
    display: none;
  }

  #icons {
    display: none;
  }
  
  .page-container {
    display: none;
  }

  #hamburguer-menu {
    display: block;
  }

  #header {
    justify-content: space-around;
  }
}
</style>
