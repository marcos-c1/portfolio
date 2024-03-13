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
      <p>Marcos is a dedicated person to the area of ​​Information Technology. He has a Bachelor's degree in Computer Science from the Federal Institute of Brasília. He has professional experience acquired through academic and freelance competitions, and also expanded his knowledge through internships carried out throughout his academic journey. His notable qualities include proactivity, resilience and dedication, characteristics that make him stand out in the field of technology.</p>
      <form method="post" @submit="sendEmail">
        <div class="form-container">
          <span style="padding-right: 2em; color: var(--color-heading); padding: 10px; font-size: 1.2em;">Contact me</span>
          <input style="width: 30em; padding: 10px; border-radius: 5px; border: none; margin-bottom: 10px; font-family: inherit;" id="contact" name="email" v-model="email" type="email" placeholder="exemplo@org.com.br"/>
          <textarea rows="10" name="message" v-model="message" placeholder="Send your message.."></textarea>
          <input id="button" type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

#button {
  font-family: inherit;
  font-size: 1em;
  background: var(--color-secondary);
  color: var(--color-heading);
  border: none;
  border-radius: 5px; 
  width: 80px;
  height: 40px;
  margin-top: 1em;
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
  color: var(--color-heading);
  max-width: 800px;
  text-justify: justify;
  padding: 20px;
  margin-top: 2em;
  white-space: normal;
}

form {
  padding: 2em 0; 
  margin-top: 1em;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
}

textarea {
  position: relative;
  font-family: inherit;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  height: 100%;
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

#container-image {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-right: 2em;
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
  
  #container {
    font-size: 0.9em;
    padding: 0;
  }
}

@media(max-width: 950px){
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap; 
  }

  #profile-pic {
    width: 200px;
    height: 200px;
    margin-left: 1em;
  }
} 

</style>
