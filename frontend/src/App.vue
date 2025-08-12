<template>
  <div id="app">
    <header>
      <h1>User Management</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/create">Create Patient</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// No logic needed here unless you want global state or layout behavior
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, sans-serif;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

router-link {
  margin-right: 10px;
}
</style>
