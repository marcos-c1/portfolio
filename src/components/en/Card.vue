<template>
<div id="container">
  <div id="card" v-for="r in repos[paginator]" :key="r.id" @click="openProject(r.html_url)">
    <figure v-if="r.image_url" class="card__thumbnail">
      <img :src="r.image_url" width="80" height="80" id="image">
    </figure>
    <h2 v-if="r.name">
      <a :href="r.html_url" target="_blank" rel="noopener">{{r.name}}</a>
    </h2>
    <p>
      {{r.description ? r.description : "Sem descrição provida."}}
    </p>
    <small v-if="r.created_at">
      Created at {{ new Date(Date.parse(r.created_at)).toISOString().split('T').join(", ").slice(0, -5).replace(/\-/g, '/') }}
    </small>
    <small v-if="r.languages" >
      {{ r.languages }}
    </small>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    repos: [[]],
    paginator: Number,
  },
  methods: {
    openProject(url){
      window.open(url, "_blank")
    }
  }
}
</script>
<style scoped>

.card__thumbnail {
  position: absolute;
  opacity: 0.5;
  right: 0;
  bottom: 0;
}

#container {
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 400px);
  grid-column-gap: 3em;
  grid-row-gap: 4em;
}

#card:hover {
  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
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
  height: 400px;
}

#card:hover {
  border-color: var(--color-secondary);
  transition: 0.4s;
  cursor: pointer;
}

#card > h2 {
  font-size: 1.7em;
  color: var(--color-secondary);
}

#card > p, #card > h1, #card > small {
  white-space: normal;
  overflow: hidden;
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
    grid-template-columns: repeat(2, 400px);
  }
}

@media(max-width: 850px) {
  #container {
    grid-template-columns: repeat(2, 300px);
    justify-items: center;
  }

  #card {
    width: 300px;
    height: 300px;
  }
}

@media(max-width: 640px){
  #container {
    grid-template-columns: 400px; 
  }

  #card {
    width: 400px;
    height: 400px;
  }
}

@media(max-width: 450px){
  #container {
    grid-template-columns: 300px; 
    grid-row-gap: 5em;
  }

  #card {
    width: 300px;
    height: 300px;
  }
}

@media(max-width: 350px){
  #container {
    grid-template-columns: 200px; 
  }

  #card {
    width: 200px;
    height: 200px;
  }

  #card > h1 {
    font-size: 1.2em;
  }

  #card > p {
    font-size: 0.7em;
  }

  #card > small {
    font-size: 0.5em;
  }
}

</style>
