<template>
  <div id="container">
     <div id="desc">
       <h1>Um desenvolvedor backend apaixonado em algoritmos.</h1>
       <RouterLink id="cv" to="/cv">Veja meu curriculo</RouterLink>
     </div>
  </div>
</template>
<style scoped>


#container {
  display: flex;
  justify-content: center; 
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  gap: 8;
  --bg-grid-color: var(--color-text); 
  width: 100%;
  height: 50vh;
  /*background-image: repeating-linear-gradient(to bottom,transparent,transparent 9px,var(--bg-grid-color) 9px,var(--bg-grid-color) 10px),repeating-linear-gradient(to right,transparent,transparent 9px,var(--bg-grid-color) 9px,var(--bg-grid-color) 10px);*/
  z-index: -100;
}

#desc {
  display: flex;
  flex-direction: column;
  color: var(--color-heading);
  width: inherit;
  height: inherit;
  /*background: rgba(0, 0, 0, 0.5);*/
  justify-content: center;
  align-items: center;
}

@keyframes slideUp {
  0% {
    padding-bottom: 0;
  }
  50% {
    padding-bottom: 1em;
  }
  100% {
    padding-bottom: 2em;
  }
}

#desc:hover {
  animation: slideUp 5s infinite;
}

#desc > h1 {
  font-size: 3em;
}

#desc > p {
  font-size: 1.5em;
}

a {
  color: var(--color-heading);
}

a:hover {
  background: none;
}

#cv {
  background-color: var(--color-background);
  color: var(--color-heading);
  height: 40px;
  width: auto;
  float: center;
  padding: 0.5em 1em;
  margin-top: 1em;
  border-radius: 5px;
  font: inherit;
  border: 1px solid var(--color-secondary);
}

#cv:hover {
  cursor: pointer;
  font-weight: bolder;
}

@media(max-width: 1580px){
  #desc > h1 {
    font-size: 2em;
  }
}

@media(max-width: 1000px){
  #desc > h1 {
    font-size: 1.5em;
  }
}

@media(max-width: 800px){
  #desc > h1 {
    font-size: 1.2em;
  }

  #cv {
    font-size: 0.9em;
  }
}

</style>
