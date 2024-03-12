<script lang="ts">
import api from "../../service/api.ts"
import Menu from '../../components/pt/Menu.vue'
import Footer from '../../components/pt/Footer.vue'


function parseDate(str_date) {
  return new Date(Date.parse(str_date));
}
export default {
  name: 'ProjectView',
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      repos: [] 
    }
  },
  created: async function(){
    this.repos = await api.fetchRepos()
  }
}
</script>

<template>
  <Menu />
    <main>
      <h1 id="title">Projetos</h1>
      <div id="container">
        <div id="card" v-for="r in repos" :key="r.id">
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
    </main>
  <Footer />
</template>

<style scoped>

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
