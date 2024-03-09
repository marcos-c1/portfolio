<script setup lang="ts">
import TreeItem from './TreeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

</script>

<template>
  <TreeItem title="resume">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Resume</template>

    Hi! My name is <u>Marcos Campos</u> and I have bachelor's degree in Computer Science in the <a href="https://www.ifb.edu.br/" target="_blank" rel="noopener">Federal Institute of Brasília (IFB)</a>. I got addicted to programming when i was 17 years old since then I had been doing a lot of personal projects just for fun! I got a little bit of experience through academic course, programming competitions, and also with freelancers jobs. Some of the knowledge came from internships did when i was in college. I guess my curiosity is something that guides me through the tecnology field, I had to solve as many as problems i can, even those that didnt have an answer (in polynomial time hehe).
  </TreeItem>

  <TreeItem title="experience-1">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>

    <h4>Public Ministry of the Federal District and Territories</h4>
    <small>Internship</small>
    <br><br>
    I worked in the Diligence department at <a href="https://www.mpdft.mp.br/portal/" target="_blank" rel="noopener">Public Ministry of the Federal District and Territories (MPDFT)</a>, my purpose was to update the processual data which was physical processes in government system. In addition, they perform functions related to archiving cases and forwarding them to the appropriate Civil Court.

    <br />
    
  </TreeItem>

  <TreeItem title="experience-2">
    <template #icon>
      <ToolingIcon/>
    </template>

    <h4>Brazilian Hospital Services Company (EBSERH)</h4>
    <small>Internship</small>
    <br><br>
    I worked in the Personnel Analysis and Dimensioning Sector at <a href="https://www.gov.br/ebserh/pt-br" target="_blank" rel="noopener">Brazilian Hospital Services Company (EBSERH)</a> in the Data Science area, with the objective of providing efficient analytical tools based on the manipulation of data from the data warehouse.
  </TreeItem>
  
  <TreeItem title="experience-3">
    <template #icon>
      <ToolingIcon/>
    </template>

    <h4>Federal Audit Court (TCU)</h4>
    <small>Internship</small>
    <br><br>
    I worked as a backend developer on <a href="https://portal.tcu.gov.br/inicio/" target="_blank" rel="noopener">Federal Audit Court (TCU)</a> Radex integrative system using pure JavaScript. The agile methodology applied was SCRUM; The main objective of the application was to provide the users an interactive interface around the deliberations of each process carried out by the control minister's committees.
  </TreeItem>

  <TreeItem title="experience-4">
    <template #icon>
      <ToolingIcon />
    </template>

    <h4>Caronas Buruger</h4>
    <small>Freelancer</small>
    <br><br>
    I worked as a frontend developer on <a href="https://www.caronasburger.com.br/">Caronas Burguer</a> with the aim of making the application responsive, consistent and interactive with the user. The entire application was developed in pure PHP and the server was hosted by Apache.
  </TreeItem>

  <TreeItem title="teste2">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </TreeItem>

  <TreeItem title="support">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </TreeItem>
</template>
<style scoped>

</style>
