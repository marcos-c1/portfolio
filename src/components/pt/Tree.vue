<script setup lang="ts">
import TreeItem from './TreeItem.vue'
import DocumentationIcon from './../icons/IconDocumentation.vue'
import ToolingIcon from './../icons/IconTooling.vue'
import EcosystemIcon from './../icons/IconEcosystem.vue'
import CommunityIcon from './../icons/IconCommunity.vue'
import SupportIcon from './../icons/IconSupport.vue'

</script>

<template>
  <h1 id="title">Experiência Profissional</h1>
  <div id="container">
    <TreeItem title="experience-1">
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Experiência</template>

      <h4>Ministério Público do Distrito Federal e Territórios</h4>
      <small>Estagiário</small>
      <br><br>
      <p>Trabalhei no setor de Diligências do <a href="https://www.mpdft.mp.br/portal/" target="_blank" rel="noopener">Ministério Público do Distrito Federal e Territórios(MPDFT)</a>, tinha como propósito atualizar os dados processuais no sistema. Ademais, exercia funções relacionadas a arquivação de processos e encaminhamento às suas devidas Varas.</p>

      <br />
      
    </TreeItem>

    <TreeItem title="experience-2">
      <template #icon>
        <ToolingIcon/>
      </template>

      <h4>Empresa Brasileira de Serviços Hospitalares (EBSERH)</h4>
      <small>Estagiário</small>
      <br><br>
      <p>Trabalhei no Setor de Análise e Dimensionamento de Pessoal na <a href="https://www.gov.br/ebserh/pt-br" target="_blank" rel="noopener">Empresa Brasileira de Serviços Hospitalares (EBSERH)</a> na área de Ciência de Dados, com o objetivo de prover um ferramental analítico eficiente a partir da manipulação dos dados advindos do data warehouse.</p>
    </TreeItem>
    
    <TreeItem title="experience-3">
      <template #icon>
        <ToolingIcon/>
      </template>

      <h4>Tribunal de Contas da União (TCU)</h4>
      <small>Estagiário</small>
      <br><br>
      <p>Trabalhei como desenvolvedor backend no sistema integrativo <b>Radex</b> do <a href="https://portal.tcu.gov.br/inicio/" target="_blank" rel="noopener">Tribunal de Contas da União (TCU)</a> com JavaScript puro, a metodologia ágil aplicada no gerenciamento de projetos era a SCRUM. O objetivo principal da aplicação Radex era disponibilizar aos usuários uma interface interativa em torno das deliberações de cada processo tramitado nos colegiados do órgão de controle.</p> 
    </TreeItem>

    <TreeItem title="experience-4">
      <template #icon>
        <ToolingIcon />
      </template>

      <h4>Caronas Burguer</h4>
      <small>Trabalhador Autônomo</small>
      <br><br>
      <p>Trabalhei como desenvolvedor frontend no projeto <a href="https://www.caronasburger.com.br/">Caronas Burguer</a> com o objetivo de deixar a aplicação responsiva, consistente e interativa com o usuário. A aplicação inteira é desenvolvida em php puro e o servidor é hospedado pelo Apache.</p>
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
  border-bottom: 1px solid var(--color-border);
}

@media(max-width: 1024px){
  #container {
    padding-bottom: 2em;
  }
}

</style>
