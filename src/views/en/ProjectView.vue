<script>
import api from "../../service/api"
import Menu from '../../components/pt/Menu.vue'
import Footer from '../../components/pt/Footer.vue'
import ArrowLeft from '../../components/icons/IconArrowLeft.vue'
import ArrowRight from '../../components/icons/IconArrowRight.vue'

function parseDate(str_date) {
  return new Date(Date.parse(str_date));
}

export default {
  name: 'ProjectView',
  components: {
    Menu,
    Footer,
    ArrowLeft,
    ArrowRight
  },
  data() {
    return {
      repos: [[]],
      pagination: 0,
      limit: 0 
    }
  },
  created: async function(){
    this.pagination = 1
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
    }
  }
}
</script>

<template>
  <Menu />
    <main>
      <h1 id="title">Projects</h1>
      <span class="error-limit" v-if="limit == pagination">There is no more projects to be fetched.</span>
      <div id="container">
        <div id="card" v-for="r in repos[pagination-1]" :key="r.id">
          <h1>
            <a :href="r.html_url" target="_blank" rel="noopener">{{r.name}}</a>
          </h1>
          <p>
            {{r.description ? r.description : "Sem descrição provida."}}
          </p>
          <small>
            {{ new Date(Date.parse(r.created_at)).toLocaleString() }}
          </small>
        </div>
      </div>
      <div id="paginator">
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
  float: right;
  margin-right: 20em;
  margin-top: 1em;
  font-size: 1.2em;
  color: var(--color-secondary);
}
#title {
  color: var(--color-heading);
  text-align: center;
  padding: 1em 0;
}
#container {
  position: relative;
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin: 0 15em;
}

#card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 1em 2em;
  color: var(--color-text);
  background: var(--color-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  width: 400px;
  height: 280px;
}

#card > p {
  color: var(--color-heading);
}

@media(max-width: 1600px) {
  #container {
    margin: 0 10em;
  }
}

@media(max-width: 1500px) {
  #container {
    margin: 0 5em;
    gap: 2em;
  }
}

@media(max-width: 1400px) {
  #container {
    margin: 0;
    gap: 1em;
  }
}

@media(max-width: 1250px) {
  #container {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 10em;
  }
}

@media(max-width: 1250px) {
  #card {
    width: 300px;
  }
}

@media(max-width: 1000px) {
  #container {
    margin-right: 0;
    margin-left: 4em;
  }

  #card h1 {
    font-size: 1.8em;
  }

  #card p {
    font-size: 0.8em;
  }
}

@media(max-width: 650px){
  #container {
    grid-template-columns: 1fr; 
    margin: 0 5em;
  }
}

@media(max-width: 400px){
  #container {
    grid-template-columns: 1fr; 
    margin-right: 1em;
  }
}

</style>
