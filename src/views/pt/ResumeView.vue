<script setup lang="ts">
import CV from "../../assets/files/curriculo_marcos.pdf" 
import Menu from '../../components/pt/Menu.vue'
import Footer from '../../components/pt/Footer.vue'

</script>
<template>
  <Menu />
  <main>
    <h1 id="title">Curriculo</h1>
    <div id="container">
    <embed :src="CV" id="pdf"></embed>
    </div>
  </main>
  <Footer />
</template>
<style scoped>

#container {
  margin: 0 15em;
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
