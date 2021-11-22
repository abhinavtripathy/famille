<template>
  <div class="home">
    <img alt="Famille logo" src="../assets/logo.png" width="50%">
    <HelloWorld msg="Welcome to Famille - Helping People with Alzheimer's"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
