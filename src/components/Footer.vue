<script setup lang="ts">
import { useRoute } from 'vue-router'
const location = useRoute();

</script>
<template>
  <footer :style="location.path === '/about' ? 'position: absolute; bottom: 0;' : 'position: relative;'" class="footer">
    <span>All right reserved &copy; Follow me <a href="https://www.github.com/marcos-c1/">@marcos-c1</a><span id="heart">&#10084;</span></span>
  </footer>
</template>
<style scoped>

.footer {
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
