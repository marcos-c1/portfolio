<script setup lang="ts">
import { useRoute } from 'vue-router'
const location = useRoute();

</script>
<template>
  <footer :style="location.path === '/sobre-mim' ? 'position: absolute; bottom: 0;' : 'position: relative;'" class="footer">
    <span>Todos os direitos reservados &copy; Me siga <a href="https://www.github.com/marcos-c1/">@marcos-c1</a><span id="heart">&#10084;</span></span>
  </footer>
</template>
<style scoped>

.footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  border: 1px solid var(--color-border);
  margin-top: 2em;
  width: 100%;
}

span {
  color: var(--color-heading);
  padding-right: 20px;
}

#heart{
  padding-left: 5px;
  color: red;
}
</style>
