<template>
  <div id="container" v-if="!isProject">
    <div id="card" v-for="r in repos[paginator]" :key="r.id" @click="openProject(r.html_url)">
      <h2 v-if="r.name">
        {{ r.name }}
      </h2>
      <p>
        {{ r.description ? r.description : "Sem descrição provida." }}
      </p>
      <small v-if="r.created_at">
        Created at {{ new Date(Date.parse(r.created_at)).toLocaleString() }}
      </small>
      <small v-if="r.languages">
        {{ r.languages }}
      </small>
    </div>
  </div>
  <div id="container" v-if="isProject">
    <div id="container__flex__col" v-for="r in repos[paginator]" :key="r.id">
      <div id="card__projects"
      @click="openProject(r.html_url)">
        <h2 v-if="r.name">
          {{ r.name }}
        </h2>
        <p>
          {{ r.description ? r.description : "Sem descrição provida." }}
        </p>
        <div id="container__flex__row" class="btnContainer">
          <div v-if="r.git_url" id="container__flex__row" @click="openProject(r.git_url)" class="btnCard">
            <IconItem site="git hub" :link="r.html_url">
              <template #icon>
                <Github />
              </template>
            </IconItem>
            <button>Github</button>
          </div>
          <div v-if="r.html_url" id="container__flex__row" @click="openProject(r.html_url)" class="btnCard">
            <IconItem site="deploy" link="">
              <template #icon>
                <Deploy />
              </template>
            </IconItem>
            <button>Site</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Github from "./../icons/IconGithub.vue";
import Deploy from "./../icons/IconDeploy.vue";
import IconItem from "./IconItem.vue";
export default {
  name: 'Card',
  components: {
    Github,
    IconItem,
    Deploy,
  },
  props: {
    repos: [[]],
    paginator: Number,
    isProject: Boolean
  },
  methods: {
    openProject(url) {
      window.open(url, "_blank")
    }
  }
}
</script>
<style scoped>
button {
  font-family: inherit;
  background-color: transparent;
  color: var(--color-text);
  border: none;
}

.btnCard {
  border: 1px solid var(--color-border);
  border-radius: 5px;
  padding: 5px 10px;
}

.btnCard>button:hover {
  cursor: pointer;
}

.btnCard>div {
  height: 40px;
}

#container__flex__col {
  display: flex;
  flex-direction: column;
}

#container__flex__row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card__thumbnail {
  max-height: 200px;
  max-width: fit-content;
}

#image {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

#container {
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 400px);
  grid-column-gap: 3em;
  grid-row-gap: 4em;
}

#card__projects {
  background-blend-mode: overlay;
}

#card:hover,
#card__projects:hover {
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
}

#card,
#card__projects {
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

#card:hover,
.btnCard:hover {
  border-color: var(--color-secondary);
  transition: 0.4s;
  cursor: pointer;
}

#card>h2,
#card__projects>h2 {
  font-size: 1.7em;
  color: var(--color-secondary);
}

#card>p,
#card>h1,
#card>small {
  white-space: normal;
  overflow: hidden;
}

#card>p {
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

  #card,
  #card__projects {
    width: 300px;
    height: 300px;
  }
}

@media(max-width: 640px) {
  #container {
    grid-template-columns: 400px;
  }

  #card,
  #card__projects {
    width: 400px;
    height: 400px;
  }
}

@media(max-width: 450px) {
  #container {
    grid-template-columns: 300px;
    grid-row-gap: 5em;
  }

  #card,
  #card__projects {
    width: 300px;
    height: 300px;
  }
}

@media(max-width: 350px) {
  #container {
    grid-template-columns: 200px;
  }

  #card,
  #card__projects {
    width: 200px;
    height: 200px;
  }

  #card>h1,
  #card__projects>h1 {
    font-size: 1.2em;
  }

  #card>p,
  #card__projects>p {
    font-size: 0.7em;
  }

  #card>small {
    font-size: 0.5em;
  }
}
</style>
