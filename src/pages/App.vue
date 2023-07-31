<template>
  <header>
    <div class="logo">
      <div class="logo__text">iljalifshic</div>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/kata">Kata</RouterLink>
      <RouterLink to="/songs">Songs</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink, RouterView
  },
  layout: 'default'
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  width: 100%;
  text-align: center;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin: 2rem 0 20px 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
