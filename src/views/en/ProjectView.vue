<script>
import api from "../../service/api"
import Menu from '../../components/en/Menu.vue'
import Footer from '../../components/en/Footer.vue'
import ArrowLeft from '../../components/icons/IconArrowLeft.vue'
import ArrowRight from '../../components/icons/IconArrowRight.vue'
import Tab from '../../components/en/Tab.vue'
import Card from '../../components/en/Card.vue'

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
          name: 'Personal',
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
            git_url: 'https://github.com/marcos-c1/notes',
            html_url: 'https://notes-frontend-jet.vercel.app/',
            description: 'A full-stack application made in Tauri, NodeJS, TypeScript, React, MongoDB. All notes, with Markdown syntax support, are saved in a non-relational bank from a user account.',
            image_url: 'https://raw.githubusercontent.com/marcos-c1/notes/dev/notes.png',
            languages: ['Typescript', 'React', 'MongoDB'],
          },
          {
            id: 1,
            name: 'COVID-19 Tracker',
            git_url: 'https://github.com/marcos-c1/covid_app',
            html_url: 'https://marcos-c1.github.io/covid-app-io/',
            description: 'An informative application about the incidence of COVID-19 disease in Brazilian states.',
            image_url: 'https://raw.githubusercontent.com/marcos-c1/covid_app/main/app.png',
            languages: ['Flutter', 'Dart'],
          },
          {
            id: 2,
            name: 'Feature extraction in snoRNAs using mathematical approach',
            git_url: 'https://github.com/marcos-c1/tcc',
            html_url: 'https://tcc-classifier.vercel.app/',
            description: 'A binary classifier that classifies two groups of snoRNAs: C/D box and H/ACA box using mathematical extraction algorithms to define genome attributes.',
            languages: ['Python', 'Bash'],
          },
          {
            id: 3,
            name: 'WhatsApp TUI',
            git_url: 'https://github.com/marcos-c1/wpp',
            description: 'An interactive terminal application consuming the whatsapp-web-js library to build a WhatsApp chat via the terminal.',
            languages: ['JavaScript'],
          },
          {
            id: 4,
            name: 'Pomodoro\'s TUI',
            git_url: 'https://github.com/marcos-c1/pomotui',
            description: 'A pomodoro TUI with user notification to monitorate each pomo cycle.',
            image_url: 'https://raw.githubusercontent.com/marcos-c1/pomotui/main/img/pomo.png',
            languages: ['Bash'],
          },
          {
            id: 5,
            name: 'INSS',
            git_url: 'https://github.com/marcos-c1/inss',
            description: 'An application that simulates the Legal Accruals System (SAL) of the Federal Revenue, which aims to calculate the social security contributions due, whether they are in arrears or not, of individual taxpayers affiliated as of 11/29/1999',
            languages: ['Python', 'Django'],
          },
          {
            id: 6,
            name: 'Djikstra\'s Visualizer',
            git_url: 'https://github.com/marcos-c1/dijkstra-visualizer',
            description: 'A Dijkstra\'s Algorithm Visualizer written in C using OpenGL graphics library.',
            image_url: 'https://raw.githubusercontent.com/marcos-c1/dijkstra-visualizer/main/img/dijkstra.png',
            languages: ['C', 'Dockerfile', 'Makefile'],
          },
        ]
      ],
    }
  },
  created: async function () {
    this.repos[this.pagination - 1] = await api.fetchRepos()
  },
  methods: {
    async fetchRepo() {
      this.pagination += 1
      const data = await api.fetchReposByPagination(this.pagination)
      if (data.length > 0) {
        this.repos[this.pagination - 1] = data
      } else {
        this.pagination -= 1
        this.limit = this.pagination
      }
    },
    fetchRepoBack() {
      this.pagination -= 1
    },
    isActive(index) {
      if (!this.tabs[index].active) {
        const resetIndex = index == 1 ? index - 1 : index + 1
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
    <h1 id="title">Projects</h1>
    <ul id="list">
      <Tab :title="tab.name" v-for="(tab, index) in tabs" :key="index" :class="tab.active ? 'active' : ''"
        @click="isActive(index)" />
    </ul>
    <span class="error-limit" v-if="limit == pagination">No more projects to be fetched.</span>
    <Card :isProject="currentTab === 0 ? true : false" :paginator="currentTab === 0 ? 0 : pagination - 1"
      :repos="currentTab === 0 ? projects : repos" />
    <div id="paginator" v-if="currentTab === 1">
      <i v-if="pagination !== 1" @click="fetchRepoBack">
        <ArrowLeft id="icon" />
      </i>
      <span>{{ pagination }}</span>
      <i @click="fetchRepo" v-if="!limit || limit != pagination">
        <ArrowRight id="icon" />
      </i>
    </div>
  </main>
  <Footer style="margin-top: 5em;" />
</template>

<style scoped>
main {
  margin-bottom: 5em;
}

#list {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2em;
}

#list>li:hover {
  cursor: pointer;
}

#list>li {
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
  display: table;
  margin-left: auto;
  margin-right: auto;
}

#icon {
  margin-top: 6px;
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
