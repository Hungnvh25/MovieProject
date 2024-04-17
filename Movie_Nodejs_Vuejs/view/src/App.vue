<template>
  <div id="app">
    <component :is="layout">
        <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  data(){
    return{
      layout:"default"
    }
  },methods:{
    
    },
  
}

</script>

<style>
@import url('./../src/assets/index.css');
</style>