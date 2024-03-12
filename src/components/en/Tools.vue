<script setup lang="ts">
import IconAngular from "./../icons/tools/IconAngular.vue"
import IconCPP from "./../icons/tools/IconCPP.vue"
import IconCSS from "./../icons/tools/IconCSS.vue"
import IconDocker from "./../icons/tools/IconDocker.vue"
import IconGO from "./../icons/tools/IconGO.vue"
import IconHTML from "./../icons/tools/IconHTML.vue"
import IconJQuery from "./../icons/tools/IconJQuery.vue"
import IconJS from "./../icons/tools/IconJS.vue"
import IconLinux from "./../icons/tools/IconLinux.vue"
import IconLua from "./../icons/tools/IconLua.vue"
import IconMongo from "./../icons/tools/IconMongo.vue"
import IconNEXT from "./../icons/tools/IconNEXT.vue"
import IconNode from "./../icons/tools/IconNode.vue"
import IconNvim from "./../icons/tools/IconNvim.vue"
import IconPHP from "./../icons/tools/IconPHP.vue"
import IconPython from "./../icons/tools/IconPython.vue"
import IconReact from "./../icons/tools/IconReact.vue"
import IconRust from "./../icons/tools/IconRust.vue"
import IconSASS from "./../icons/tools/IconSASS.vue"
import IconSharp from "./../icons/tools/IconSharp.vue"
import IconSQL from "./../icons/tools/IconSQL.vue"
import IconSvelte from "./../icons/tools/IconSvelte.vue"
import IconTerminal from "./../icons/tools/IconTerminal.vue"
import IconTS from "./../icons/tools/IconTS.vue"
import IconVue from "./../icons/tools/IconVue.vue"

</script>
<template>
  <div>
    <h1 id="title">Skills</h1>
    <div id="container">
      <i id="icon-left"> 
        <IconAngular />
        <IconCSS />
        <IconHTML />
        <IconReact />
        <IconVue />
        <IconSASS />
        <IconSvelte />
        <IconNEXT />
        <IconSQL />
        <IconTS />
      </i>
      <i id="icon-right"> 
        <IconCPP />
        <IconJQuery />
        <IconGO />
        <IconDocker />
        <IconLua />
        <IconMongo />
        <IconPython />
        <IconTS />
        <IconRust />
        <IconSharp />
      </i>
    </div>
  </div>
</template>
<style scoped>

#container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: start;
  padding-top: 2em;
  margin: 0 15em;
  height: 40em;
}

#icon-left, #icon-right{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

#icon-left > svg, #icon-right > svg{
  flex: 1 2 21%;
  margin: 1em; 
}

#title {
  color: var(--color-heading);
  text-align: center;
  padding: 1em 0;
}

@media(max-width: 1250px){
  #container {
    margin: 0 10em;
  }
}

@media(max-width: 1250px){
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
