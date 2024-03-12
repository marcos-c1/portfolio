<script lang="ts">
import api from "../../service/api.ts"
import Menu from '../../components/en/Menu.vue' 
import Footer from '../../components/en/Footer.vue'

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
    <h1 id="title">Projects</h1>
    <div id="container">
      <div id="card" v-for="r in repos" :key="r.id">
        <h1>
          <a :href="r.html_url" target="_blank" rel="noopener">{{r.name}}</a>
        </h1>
        <p>
          {{r.description ? r.description : "No description provided."}}
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
  gap: 5em;
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

</style>
