<template>
    <li class="item"> 
      <span> 
        <a>
          {{ title }} 
        </a>
      </span>
    </li>
</template>
<script setup lang="ts">
 defineProps({
   title: String,
 })
</script>
