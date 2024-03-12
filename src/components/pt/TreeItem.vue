<template>
  <div class="item"> 
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details" :id="title"> 
      <h3> 
        <slot name="heading"></slot>
      </h3>
      <p id="description">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
 const prop = defineProps({
 title: String,
 })
</script>

<style scoped>

.item {
  margin: 0 15em;
  height: 250px;
  display: flex;
  position: relative;
}

.focus {
  background: var(--color-secondary)
}

.details {
  flex: 1;
  align-self: center;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

i:hover {
  cursor: pointer;
  border-color: var(--color-secondary);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: 100%;
  }
  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}

@media(max-width: 1200px){
  #title {
    font-size: 0.9em;
    color: var(--color-heading);
  }
  
  .item {
    margin: 0 10em;
    height: 250px;
  }
  p {
    font-size: 0.9em;
  }  
}

@media(max-width: 1024px) {
  .item {
    padding-top: 5em;
  }
}

@media(max-width: 850px){
  #description {
    font-size: 0.9em;
  }
  .item {
    margin: 0 5em;
  }

}

@media(max-width: 670px){
  .item {
    margin-top: 2em;
  }
}

</style>
