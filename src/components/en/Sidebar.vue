<script>
import Linkedin from '../icons/IconLinkedin.vue'
import Github from '../icons/IconGithub.vue'
import IconItem from '../pt/IconItem.vue'
import Light from '../icons/IconLight.vue'
import Dark from '../icons/IconDark.vue'
import Close from '../icons/IconClose.vue' 
import {useRouter} from 'vue-router'

export default {
  name: 'Sidebar',
  components: {
    Linkedin,
    Github,
    IconItem,
    Light,
    Dark,
    Close 
  },
  props: {
    isExpanded: Boolean
  },
  data() {
    return {
      isDarkTheme: Boolean,
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
  },

}
</script>
<template>
  <aside v-show="isExpanded">
    <ul id="links">
      <RouterLink to="/en">Home</RouterLink>
      <RouterLink to="/en/about">About me</RouterLink>
      <RouterLink to="/en/projects">Projects</RouterLink>
      <RouterLink to="/en/resume">Curriculum</RouterLink>
    </ul>
    <ul id="icons">
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
    </ul>
  </aside>
</template>
<style scoped>

li {
  list-style: none;
}

#links {
  display: flex;
  flex-direction: column;
  margin: 1em;
  margin-top: 3em;
  font-weight: bolder;
}

#links > a {
  padding-top: 1em;
}

#icons {
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;
  padding: 1em;
}

.mode-container {
  display: flex;
  height: 40px;
  width: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: end; 
  background-color: var(--color-border);
  border-radius: 2em;
}

.mode-container:hover {
  cursor: pointer;
  background-color: var(--color-heading);
}


#social-media {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: end; 
}

aside {
  user-select: none;
  background: transparent;
  backdrop-filter: blur(5px);
  top: 0;
  position: fixed;
  height: 100%;
  width: 16em;
  padding: 1rem;
  z-index: 99;
  transform: translate3d(100vw,0,0) translateX(-100%);
  transition: 0.4s all ease-in;
}

.page-container {
  display: flex;
  flex-direction: row;
  align-items: end;
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

</style>
