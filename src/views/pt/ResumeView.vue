<script setup lang="ts">
import CV from "../../assets/files/marcos_cv.pdf"
import Menu from '../../components/pt/Menu.vue'
import Footer from '../../components/pt/Footer.vue'

</script>
<template>
  <Menu />
  <main>
    <h1 id="title">Curriculo</h1>
    <div id="container">
      <object :data="CV" type="application/pdf" style="height: 100%; width:100%;"></object>
    </div>
  </main>
  <Footer />
</template>
<style scoped>

#container {
  display: flex;
  justify-content: center;
  height: 80em;
}

#title {
  color: var(--color-heading);
  text-align: center;
  padding: 1em 0;
}

#pdf {
  width: 100%;
  height: 100%;
}

</style>
