<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <button @click="$router.push({name:'no-entry'})" class="btn btn-primary">primary</button>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  methods:{
    goToDayBook(){
     
    }
  }
}
</script>
