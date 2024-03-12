<script setup lang="ts">
  defineProps({
    link: String,
    site: String,
  })
</script>
<template>
  <div>
    <i>
      <a :href="link" :id="site" target="_blank" rel="noopener"><slot name="icon"></slot></a>
    </i>
  </div>
</template>

<style scoped>

a {
  border: none;
  background: transparent;
  transition: 0.7s all ease-in-out;
}

a:hover {
  fill: white;
  border-radius: 8px;
}

i {
  display: flex;
  font-weight: bold;
  place-items: center;
  place-content: center;
  width: 50px;
  height: 50px;
  color: var(--color-text);
}

</style>
