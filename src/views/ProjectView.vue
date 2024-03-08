<template>
  <div id="container">
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
    <div id="card">
      <h1>Project name</h1>
      <p>Description</p>
      <small>Date</small>
    </div>
  </div>
</template>

<script>
import { fetchRepos } from "../service/api.ts"
export default {
  name: 'ProjectView',
  data: {
    repos: Promise
  },
  mounted: async function(){
    this.repos = await fetchRepos() 
  }
}
</script>
<style scoped>

#container {
  padding-top: 10em;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5em;
  margin: 0 15em;
}
#card {
  background: var(--color-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  width: 400px;
  height: 250px;
}
</style>
