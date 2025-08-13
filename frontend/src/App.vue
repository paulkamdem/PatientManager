<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import './assets/dashboardStyle.css';

const darkMode = ref(false);
const toggleDarkMode = () => (darkMode.value = !darkMode.value);
</script>

<template>
  <div :class="['app', { dark: darkMode }]">
    <aside class="sidebar">
      <div class="logo">✨ PatientApp</div>
      <nav>
        <RouterLink to="/">🏠 Dashboard</RouterLink>
        <RouterLink to="/create">➕ Create</RouterLink>
      </nav>
      <button @click="toggleDarkMode">
        {{ darkMode ? '🌞 Light Mode' : '🌙 Dark Mode' }}
      </button>
    </aside>

    <main class="main">
      <header class="topbar">
        <h1>Welcome to PatientApp</h1>
      </header>
      <section class="content">
        <RouterView />
      </section>
      <footer class="footer">
        <p>© 2025 PatientApp. Crafted with ❤️</p>
      </footer>
    </main>
  </div>
</template>
