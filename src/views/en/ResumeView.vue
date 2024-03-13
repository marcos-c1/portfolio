<script setup lang="ts">
import CV from "../../assets/files/curriculo_marcos_en.pdf" 
import Menu from '../../components/en/Menu.vue'
import Footer from '../../components/en/Footer.vue'

</script>
<template>
  <Menu />
  <main>
    <h1 id="title">Curriculum Vitae</h1>
    <div id="container">
      <object :data="CV" type="application/pdf" style="heigth: 100%; width:100%;"></object>
    </div>
  </main>
  <Footer />
</template>
<style scoped>

#container {
  display: flex;
  justify-content: center;
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

@media(max-width: 1200px) {
  #container {
    margin: 0 10em;
  }

}

@media(max-width: 800px) {
  #container {
    margin: 0 5em;
  }
}

@media(max-width: 500px) {
  #container {
    margin: 0;
  }
}

</style>
