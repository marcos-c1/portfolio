<script> 
import Github from "./../icons/IconGithub.vue";
import Linkedin from "./../icons/IconLinkedin.vue";
import IconItem from "./IconItem.vue";
import Logo from "./../icons/Logo.vue";
import Dark from "./../icons/IconDark.vue";
import Light from "./../icons/IconLight.vue";
import Menu from "./../icons/IconMenu.vue";
import Sidebar from "./../en/Sidebar.vue";
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
      this.isEnglish = true
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
    <ul>
      <div class="header-container">
       <Logo id="logo-photo"/>
       <h3 id="logo">Marcos</h3>
       <small>marcos-c1</small>
      </div>
      <i>
        <Menu id="hamburguer-menu" @click="isExpanded = !isExpanded"/>
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
      <RouterLink to="/en">Home</RouterLink>
      <RouterLink to="/en/about">About</RouterLink>
      <RouterLink to="/en/projects">Projects</RouterLink>
      <RouterLink to="/en/resume">Curriculum</RouterLink>
      <div class="mode-container" @click="toggleTheme">
        <li v-if="isDarkTheme">
          <i>
            <Light />
          </i>
        </li>
        <li v-else> 
          <i>
            <Dark/>
          </i>
        </li>
      </div>
    </ul>
    <div id="social-media">
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
  </header>
</template>

<style scoped>

.header-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  align-items: center; 
  white-space: nowrap;
  user-select: none;
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
  border-radius: 10px;                  
  padding: 5px;
  margin-right: 2em;
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

.mode-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end; 
  background-color: var(--color-border);
  border-radius: 2em;
  margin-right: 1em;
}

.mode-container > li {
  margin-top: 10px;
  padding: 0 10px;
  width: inherit;
  height: inherit;
}

.mode-container:hover {
  cursor: pointer;
  background-color: var(--color-heading);
}

#hamburguer-menu:hover {
  cursor: pointer;
  background-color: var(--color-secondary);

}

#logo-photo {
  animation: levitate 3s infinite backwards; 
  position: absolute;
  color: var(--color-secondary);
  left: 0;
  font-weight: bolder;
  margin-left: 13em;
  width: 70px;
  height: 70px;
} 

small {
  left: 0;
  top: 50px;
  margin-left: 21em;
}
#logo {
  color: var(--color-heading);
  left: 0;
  margin-left: 15em;
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
  font-family: inherit;
  font-size: 1.1em;
  color: var(--color-text);
  top: 0;
  display: flex;
  overflow: hidden;
  justify-content: flex-end; 
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

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
}

#social-media {
  display: flex;
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

@media(max-width: 1580px){
  #logo {
    margin-left: 9em;
  } 

  #logo-photo {
    margin-left: 6em;
  }
  small {
    margin-left: 13em;
  }
}

@media(max-width: 1420px){
  #logo {
    font-size: 1em;

  }

  a {
    display: none;
  }
  #hamburguer-menu {
    display: block;
  }
  #header {
    justify-content: center;
  }
  .header-container {
    position: relative;
    padding-right: 15em;
  }
}

@media(max-width: 1000px){
  #social-media {
    display: none;
  }
}

@media(max-width: 800px){
  .mode-container {
    display: none;
  }
  .page-container {
    display: none;
  } 
}


</style>
