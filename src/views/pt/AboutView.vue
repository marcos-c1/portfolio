<script setup lang="ts">
  import About from "../../components/pt/About.vue"
  import Menu from '../../components/pt/Menu.vue'
  import Footer from '../../components/pt/Footer.vue'

</script>
<template>
  <Menu />
  <main style="padding-top: 5em;">
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

.footer {
  position: absolute;
  bottom: 0;
}

</style>
