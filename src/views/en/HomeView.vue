<script setup lang="ts">
import Tree from '../../components/en/Tree.vue'
import Tools from '../../components/en/Tools.vue'
import Hero from '../../components/en/Hero.vue'
import WhoAmI from '../../components/en/WhoAmI.vue'
import Menu from '../../components/en/Menu.vue' 
import Footer from '../../components/en/Footer.vue'

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
