<script setup lang="ts">
import Github from "./icons/IconGithub.vue";
import Linkedin from "./icons/IconLinkedin.vue";
import IconItem from "./IconItem.vue";
import Logo from "./icons/Logo.vue";
</script>

<template>
  <header id="header">
    <Logo id="logo-photo"/>
    <h3 id="logo">Marcos</h3>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
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

#logo-photo {
  position: absolute;
  color: var(--color-secondary);
  left: 0;
  top: 10px;
  font-weight: bolder;
  margin:0 13em;
  width: 70px;
  height: 70px;
}
#logo {
  position: absolute;
  color: var(--color-heading);
  left: 0;
  margin:0 15em;
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
