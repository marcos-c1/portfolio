<script setup lang="ts">
import CV from "../assets/files/curriculo_marcos_english.pdf"
</script>
<template>
  <main>
    <h1 id="title">Curriculum Vitae</h1>
    <div id="container">
    <embed :src="CV" id="pdf"></embed>
    </div>
  </main>
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
