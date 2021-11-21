<template>
 <div>
  <nav class="navbar navbar-expand-sm navbar-dark bg-color-blue justify-content-center">
  
    <!-- <ul class="navbar-nav justify-content-center">
            <li class="nav-item">
                <h4><a class="nav-link" href="#">Link |</a></h4>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Codeply</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul> -->
       
        <router-link to="/">Home </router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/about">About </router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/AddFamily">Add Family </router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/ViewFamily">View My Family </router-link>
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