<script setup lang="ts">
import TreeItem from './TreeItem.vue'
import TCUIcon from './../icons/IconTcu.vue'
import CaronasIcon from './../icons/IconCaronas.vue'
import EBSERHIcon from './../icons/IconEbserh.vue'
import MPDFTIcon from './../icons/IconMpdft.vue'
import DocumentationIcon from './../icons/IconDocumentation.vue'
import ToolingIcon from './../icons/IconTooling.vue'
import EcosystemIcon from './../icons/IconEcosystem.vue'
import CommunityIcon from './../icons/IconCommunity.vue'
import SupportIcon from './../icons/IconSupport.vue'

</script>

<template>
  <h1 id="title">Professional Background</h1>
  <div id="container"> 
    <TreeItem title="experience-1">
      <template #icon>
        <MPDFTIcon/>
      </template>
      <template #heading>Experience</template>

      <h4>Public Ministry of the Federal District and Territories</h4>
      <small>Internship</small>
      <br><br>
      <p>I worked in the Diligence department at <a href="https://www.mpdft.mp.br/portal/" target="_blank" rel="noopener">Public Ministry of the Federal District and Territories (MPDFT)</a>, my purpose was to update the processual data which was physical processes in government system. In addition, they perform functions related to archiving cases and forwarding them to the appropriate Civil Court.</p>

      <br />
      
    </TreeItem>

    <TreeItem title="experience-2">
      <template #icon>
        <EBSERHIcon/>
      </template>

      <h4>Brazilian Hospital Services Company (EBSERH)</h4>
      <small>Internship</small>
      <br><br>
      <p>I worked in the Personnel Analysis and Dimensioning Sector at <a href="https://www.gov.br/ebserh/pt-br" target="_blank" rel="noopener">Brazilian Hospital Services Company (EBSERH)</a> in the Data Science area, with the objective of providing efficient analytical tools based on the manipulation of data from the data warehouse.</p>
    </TreeItem>
    
    <TreeItem title="experience-3">
      <template #icon>
        <TCUIcon />
      </template>

      <h4>Federal Audit Court (TCU)</h4>
      <small>Internship</small>
      <br><br>
      <p>I worked as a backend developer on <a href="https://portal.tcu.gov.br/inicio/" target="_blank" rel="noopener">Federal Audit Court (TCU)</a> Radex integrative system using pure JavaScript. The agile methodology applied was SCRUM; The main objective of the application was to provide the users an interactive interface around the deliberations of each process carried out by the control minister's committees.</p>
    </TreeItem>

    <TreeItem title="experience-4">
      <template #icon>
        <CaronasIcon />
      </template>

      <h4>Caronas Buruger</h4>
      <small>Freelancer</small>
      <br><br>
      <p>I worked as a frontend developer on <a href="https://www.caronasburger.com.br/">Caronas Burguer</a> with the aim of making the application responsive, consistent and interactive with the user. The entire application was developed in pure PHP and the server was hosted by Apache.</p>
    </TreeItem>
  </div>
</template>
<style scoped>

#title {
  color: var(--color-heading);
  text-align: center;
  padding: 1em 0;
}

#container {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-border);
}

@media(max-width: 1024px){
  #container {
    padding-bottom: 2em;
  }
}

</style>
