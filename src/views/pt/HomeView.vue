<script setup lang="ts">
import Tree from '../../components/pt/Tree.vue'
import Tools from '../../components/pt/Tools.vue'
import Hero from '../../components/pt/Hero.vue'
import WhoAmI from '../../components/pt/WhoAmI.vue'
import Menu from '../../components/pt/Menu.vue'
import Footer from '../../components/pt/Footer.vue'

</script>

<template>
  <main>
    <Menu />
    <Hero />
    <WhoAmI />
    <Tree/>
    <Tools />
    <Footer />
  </main>
</template>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
}
</style>
