<script>
import api from "../../service/api"
import Menu from '../../components/pt/Menu.vue'
import Footer from '../../components/pt/Footer.vue'
import ArrowLeft from '../../components/icons/IconArrowLeft.vue'
import ArrowRight from '../../components/icons/IconArrowRight.vue'
import Tab from '../../components/pt/Tab.vue'
import Card from '../../components/pt/Card.vue'

export default {
  name: 'ProjectView',
  components: {
    Menu,
    Footer,
    ArrowLeft,
    ArrowRight,
    Tab,
    Card
  },
  data() {
    return {
      repos: [[]],
      pagination: 1,
      currentTab: 0,
      limit: 0,
      tabs: [
        {
          id: 0,
          name: 'Pessoal', 
          active: true 
        },
        {
          id: 1,
          name: 'Github',
          active: false
        }
      ],
      projects: [
        [
          {
            id: 0,
            name: 'Notes',
            html_url: 'https://notes-frontend-jet.vercel.app/',
            description: 'Uma aplicação full-stack feita em Tauri, NodeJS, TypeScript, React, MongoDB. Todas as notas, com suporte a sintaxe Markdown, são salvas em um banco não-relacional a partir de uma conta de usuário.',
            image_url: './src/assets/imgs/notes.png',
            languages: ['Typescript', 'React', 'MongoDB'],
          },
          {
            id: 1,
            name: 'COVID-19 Tracker',
            html_url: 'https://marcos-c1.github.io/covid-app-io/',
            description: 'Um aplicativo informativo sobre a incidência da doença COVID-19 nos estados brasileiros.',
            image_url: './src/assets/imgs/covid.png',
            languages: ['Flutter', 'Dart'],
          },
        ]
      ],
    }
  },
  created: async function(){
    this.repos[this.pagination-1] = await api.fetchRepos()
  },
  methods: {
    async fetchRepo() {
      this.pagination += 1
      // TODO: filter by pagination
      const data = await api.fetchReposByPagination(this.pagination)
      if(data.length > 0){
        this.repos[this.pagination-1] = data
      } else {
        this.pagination -= 1
        this.limit = this.pagination
      }
    },
    fetchRepoBack(){
      this.pagination -= 1
    },
    isActive(index) {
      if(!this.tabs[index].active){
        const resetIndex = index == 1 ? index-1 : index+1
        this.tabs[resetIndex].active = false 
        this.currentTab = index
        this.tabs[index].active = !this.tabs[index].active 
      }
    }
  }
}
</script>

<template>
  <Menu />
    <main>
      <h1 id="title">Projetos</h1>
      <ul id="list">
        <Tab :title="tab.name" v-for="(tab, index) in tabs" :key="index" :class="tab.active  ? 'active' : ''" @click="isActive(index)"/>
      </ul>
      <span class="error-limit" v-if="limit == pagination">Não há mais projetos a serem buscados.</span>
      <Card :paginator="currentTab === 0 ? 0 : pagination-1" :repos="currentTab === 0 ? projects : repos"/> 
      <div id="paginator" v-if="currentTab === 1">
        <i v-if="pagination !== 1" @click="fetchRepoBack">
          <ArrowLeft id="icon"/>
        </i>
        <span>{{ pagination }}</span>
        <i @click="fetchRepo" v-if="!limit || limit != pagination">
          <ArrowRight id="icon" />
        </i>
      </div>
    </main>
  <Footer style="margin-top: 5em;"/>
</template>

<style scoped>

#list {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2em;
}

#list > li:hover {
  cursor: pointer;
}

#list > li {
  margin-right: 2em;
}

.active {
  border-bottom: 3px solid var(--color-secondary); 
}

.error-limit {
  color: red; 
  font-size: 1.2em; 
  margin-top: 1em; 
  margin-bottom: 1em; 
  display:table;
  margin-left: auto;
  margin-right: auto;
}

#icon {
  border-radius: 5px;
  align-self: center;
}

#icon:hover {
  cursor: pointer;
}

#icon:first-child {
  margin-right: 1em;
}

#icon:last-child {
  margin-left: 1em;
}

#paginator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
  font-size: 1.2em;
  color: var(--color-secondary);
}
#title {
  color: var(--color-heading);
  text-align: center;
  padding: 1em 0;
}

</style>
