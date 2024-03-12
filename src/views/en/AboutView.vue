<script setup lang="ts">
import About from "../../components/en/About.vue"
import Menu from '../../components/en/Menu.vue' 
import Footer from '../../components/en/Footer.vue'

</script>
<template>
  <Menu />
  <main style="padding-top: 2em;">
    <div class="about">
      <About />
    </div>
  </main>
  <Footer />
</template>

<style>

.about {
  margin: 0 15em;
  text-align: center;
}

</style>
