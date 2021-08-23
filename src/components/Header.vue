<template>
  <div class="flex flex-col sm:flex-row items-center justify-between">
    <div>
      <router-link to="/"
        ><img alt="logo" class="logo ml-0 sm:ml-10" src="../assets/logo.png"
      /></router-link>
    </div>
    <div>
      <router-link to="/jeux" class=" italic m-8">Jeux</router-link>
      <router-link to="/consoles" class=" italic m-8">Consoles</router-link>
      <router-link to="/news" class=" italic m-8">News</router-link>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 200px;
}
</style>
