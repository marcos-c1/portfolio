<script> 
import Github from "./icons/IconGithub.vue";
import Linkedin from "./icons/IconLinkedin.vue";
import IconItem from "./IconItem.vue";
import Logo from "./icons/Logo.vue";
import Dark from "./icons/IconDark.vue";
import Light from "./icons/IconLight.vue";

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
        isDarkTheme: Boolean 
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
      }
    },
    created: function(){
      this.isDarkTheme = this.checkTheme()
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
      <div class="mode-container">
        <li v-if="isDarkTheme" @click="toggleTheme">
          <i>
            <Light />
          </i>
        </li>
        <li v-else @click="toggleTheme"> 
          <i>
            <Dark/>
          </i>
        </li>
      </div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/resume">Curriculum</RouterLink>
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

.mode-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end; 
  background-color: var(--color-border);
  border-radius: 2em;
  padding: 0 10px;
  margin-right: 2em;
}

.mode-container > li {
  margin-top: 10px;
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
