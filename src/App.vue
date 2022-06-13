<template>
  <Loader v-if="!isloaded"/>
  <div class="app">
    <Sidebar />
    <transition name="router-anim">
      <router-view />
    </transition>
  </div>
</template>


<script>
import "./assets/css/main.css";
import Sidebar from "./components/sidebar.vue";
import Loader from "./components/Loader.vue";

export default {
  data() {
    return {
      isloaded: false
    }
  },
  components: { Sidebar, Loader },
  created() {
    document.body.style.overflow = 'hidden'
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.isloaded = true
      }
    }
    document.body.style.overflow = 'auto'
  }
}
</script>


<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  border: none;
  outline: none;
  appearance: none;
  background: none;
  cursor: pointer;
}

.app {
  display: flex;
  overflow: hidden;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
