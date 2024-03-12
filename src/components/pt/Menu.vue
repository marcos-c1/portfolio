<script> 
import Github from "./../icons/IconGithub.vue";
import Linkedin from "./../icons/IconLinkedin.vue";
import IconItem from "./IconItem.vue";
import Logo from "./../icons/Logo.vue";
import Dark from "./../icons/IconDark.vue";
import Light from "./../icons/IconLight.vue";
import { useRouter } from 'vue-router';


export default {
    name: "Menu",
    components: {
      Github,
      Linkedin,
      IconItem,
      Logo,
      Dark,
      Light
    },
    data() {
      return {
        isDarkTheme: Boolean,
        isEnglish: Boolean,
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
          this.router.push('/en') 
          this.isEnglish = !this.isEnglish 
          console.log(this.isEnglish)
        }
      }
    },
    mounted: function(){
      this.isDarkTheme = this.checkTheme()
      this.isEnglish = false
    },
}
</script>

<template>
  <header id="header">
    <div class="header-container">
     <Logo id="logo-photo"/>
     <h3 id="logo">Marcos</h3>
     <small>marcos-c1</small>
    </div>
    <ul>
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
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sobre-mim">Sobre mim</RouterLink>
      <RouterLink to="/projetos">Projetos</RouterLink>
      <RouterLink to="/cv">Curriculo</RouterLink>
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

#logo-photo {
  animation: levitate 3s infinite backwards; 
  position: absolute;
  color: var(--color-secondary);
  left: 0;
  font-weight: bolder;
  margin:0 13em;
  width: 70px;
  height: 70px;
} small {
  left: 0;
  top: 50px;
  margin:0 21em;
}
#logo {
  color: var(--color-heading);
  left: 0;
  margin:0 15em;
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
}

#social-media {
  display: flex;
}
</style>
