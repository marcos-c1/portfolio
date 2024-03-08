<script>
import api from "../service/api.ts"

export default {
  name: 'About',
  data() {
    return {
      user: {}
    }
  },
  created: async function(){
    this.user = await api.fetchUser()
  }
}
</script>
<template>
  <div id="container">
    <div id="my-image">
      <img :src="user.avatar_url" id="profile-pic" alt="marcos-c1"/>
      <h2>{{user.name}}</h2>
      <span>{{user.blog}}</span>
      <span>{{user.login}}</span>
      <small>{{user.location}}</small>
    </div>
    <div id="brief-desc">
      <p>Marcos is a dedicated person to the area of ​​Information Technology. He has a Bachelor's degree in Computer Science from the Federal Institute of Brasília. He has professional experience acquired through academic and freelance competitions, and also expanded his knowledge through internships carried out throughout his academic journey. His notable qualities include proactivity, resilience and dedication, characteristics that make him stand out in the field of technology.</p>
      <form method="post" @submit="getInfo">
        <div class="form-container">
          <span style="padding-right: 2em; color: var(--color-heading); font-size: 1.2em; ">Contact me</span>
          <input style="width: 30em;" type="email" placeholder="example@org.com"/>
        </div>
        <textarea rows="10" placeholder="Send your message.."></textarea>
        <button id="icon">
          <span style="color: var(--color-heading);">Send</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

button {
  font-family: inherit;
  font-size: 1em;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  float: right;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary);
  border: none;
  border-radius: 5px; 
  width: 80px;
  height: 40px;
}

button:hover {
  cursor: pointer;
  border: 3px solid var(--color-heading);
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

#my-image {
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
</style>
