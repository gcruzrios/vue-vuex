<template>
  <div class="container">
    <ListMemes/>
    
  </div>
    

</template>

<script>
import ListMemes from './components/ListMemes.vue'
import { useStore } from "vuex";

export default {
  components: { ListMemes },
  name: 'App',
  
  
  
}
</script>

<style>
#app {
  
}
</style>
