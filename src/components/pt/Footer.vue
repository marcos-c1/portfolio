<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from "./../icons/Logo.vue";
const location = useRoute();

</script>
<template>
  <footer class="footer">
     <Logo id="logo-photo"/>
    <small><a href="https://www.github.com/marcos-c1/">@marcos-c1</a><span id="heart">&#10084;</span></small>
  </footer>
</template>
<style scoped>

.footer {
  white-space: nowrap; 
  font-family: inherit;
  color: var(--color-text);
  bottom: 0;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background: transparent; 
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--color-secondary); 
  width: 100%;
  height: 1.5em;
}

a {
  color: var(--color-heading);
}

#logo-photo {
  position: relative;
  animation: levitate 1s infinite backwards; 
  color: var(--color-secondary);
  font-weight: bold;
  width: 40px;
  height: 30px;
} 

#heart{
  padding-left: 5px;
  color: red;
}
</style>
