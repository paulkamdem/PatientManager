<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

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

<style scoped>
/* Layout */
.app {
  display: flex;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #f8f9fa, #e0eafc);
  color: #333;
  transition: all 0.3s ease;
}

.sidebar {
  width: 260px;
  background: linear-gradient(to bottom, #ffffff, #f0f0f0);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #3498db;
  text-align: center;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

nav a {
  text-decoration: none;
  font-weight: 500;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.2s ease;
}

nav a:hover {
  background-color: #3498db;
  color: white;
}

button {
  margin-top: auto;
  padding: 0.6rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #2980b9;
}

/* Main content */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.topbar {
  padding: 1.5rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.topbar h1 {
  margin: 0;
  font-size: 1.6rem;
  color: #2c3e50;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: #fdfdfd;
}

.footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.85rem;
  color: #777;
  background-color: #f0f0f0;
}

/* Dark mode */
.dark {
  background: linear-gradient(to right, #1e1e2f, #2c2c3c);
  color: #eee;
}

.dark .sidebar {
  background: linear-gradient(to bottom, #2c2c3c, #1e1e2f);
  box-shadow: none;
}

.dark .logo {
  color: #00bfff;
}

.dark nav a {
  color: #eee;
}

.dark nav a:hover {
  background-color: #00bfff;
  color: #1e1e2f;
}

.dark button {
  background-color: #00bfff;
}

.dark button:hover {
  background-color: #009acd;
}

.dark .topbar,
.dark .footer {
  background-color: #2c2c3c;
  color: #ccc;
}

.dark .content {
  background-color: #1e1e2f;
}
</style>
