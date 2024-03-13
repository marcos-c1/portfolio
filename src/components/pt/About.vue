<script>
import api from "../../service/api.ts"

export default {
  name: 'About',
  data() {
    return {
      email: null,
      message: null,
      user: {}
    }
  },
  methods: {
    sendEmail: function(e) {
      e.preventDefault()
      if(this.email && this.message){
        window.open(`mailto:${this.email}?subject=Portfolio subject.&body=${this.message}`);
      }
    } 
  },
  created: async function(){
    this.user = await api.fetchUser()
  }
}
</script>
<template>
  <div id="container">
    <div id="container-image">
      <img :src="user.avatar_url" id="profile-pic" alt="marcos-c1"/>
      <h2>{{user.name}}</h2>
      <span>{{user.blog}}</span>
      <span>{{user.login}}</span>
      <small>{{user.location}}</small>
    </div>
    <div id="brief-desc">
      <p>Marcos é uma pessoa dedicada à área de Tecnologia da Informação. É bacharel em Ciência da Computação pelo Instituto Federal de Brasília. Possui experiência profissional adquirida através de concursos acadêmicos e freelance, e também ampliou seus conhecimentos através de estágios realizados ao longo de sua trajetória acadêmica. Suas qualidades notáveis ​​incluem proatividade, resiliência e dedicação, características que o diferenciam na área de tecnologia.</p>
      <form method="post" @submit="sendEmail">
        <div class="form-container">
          <span style="padding-right: 2em; color: var(--color-heading); font-size: 1.2em; ">Contate-me</span>
          <input style="width: 30em;" name="email" v-model="email" type="email" placeholder="exemplo@org.com.br"/>
        </div>
        <textarea rows="10" name="message" v-model="message" placeholder="Escreva sua mensagem.."></textarea>
        <input id="button" style="color: var(--color-heading);" type="submit" value="Enviar" />
      </form>
    </div>
  </div>
</template>

<style scoped>

#button {
  font-family: inherit;
  font-size: 1em;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  float: right;
  justify-content: center;
  background: var(--color-secondary);
  border: none;
  border-radius: 5px; 
  width: 80px;
  height: 40px;
}

#button:hover {
  cursor: pointer;
  border: 1px solid var(--color-heading);
  transition: 0.3s all ease-in-out;
}

h2 {
  color: var(--color-heading);
}

#brief-desc {
  text-align: center;
  text-justify: justify;
  align-self: center;
  padding: 20px;
  margin-top: 2em;
}

form {
  padding: 2em 0; 
  margin-top: 1em;
}

.form-container {
  padding-bottom: 1em;
}

p {
  color: var(--color-heading);
  font-size: 1.2em;
}

input {
  font-family: inherit;
  padding: 1em;
  border-radius: 5px;
}

textarea {
  position: relative;
  width: 100%;
  font-family: inherit;
  border-radius: 10px;
  padding: 1em;
  resize: none;
}

#container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  justify-content: center;
  align-items: center;
}

#container-image {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-self: center;
  margin-top: 3em;
}

#profile-pic {
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

@media(max-width: 1600px){
  #profile-pic {
    width: 300px;
    height: 300px;
  }
  #container-image {
    margin-top: 0;
  }
  #brief-desc > p {
    font-size: 1em;
    padding-top: 2em;
  }
}

@media(max-width: 1000px) {
  #profile-pic {
    width: 250px;
    height: 250px;
  }
  
  #brief-desc > p {
    font-size: 0.9em;
  }
}

@media(max-width: 750px){
  #container {
    grid-template-columns: 1fr; 
    margin-bottom: 2em;
  }

  #profile-pic {
    margin-left: 1em;
  }
} 

</style>
