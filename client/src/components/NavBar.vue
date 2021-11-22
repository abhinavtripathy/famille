<template>
 <div>
  <nav class="navbar navbar-expand-sm navbar-dark bg-color-blue justify-content-center">
       
        <router-link to="/">Home </router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
      <!-- <router-link to="/about">About </router-link> &nbsp;&nbsp;|&nbsp;&nbsp; -->
      <router-link to="/AddFamily">Add Family </router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/ViewFamily">View My Family </router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/DailyQuiz">Daily Check In </router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/AddMemories">Add Memories</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/ViewMemories">View Family Memories</router-link>
</nav>
  
</div>

</template>

<style scoped>
.bg-color-blue {
  background-color: rgb(179, 135, 216);
}
#nav a {
  font-weight: bold;
  color: #ffffff;
}
#nav a.router-link-exact-active {
  color: #510664;
}
</style>