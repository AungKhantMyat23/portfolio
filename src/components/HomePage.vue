<template>
  <div>
    <div v-if="show" class="overlay" @click="show = false"></div>
    <MainNavbar />
    <Transition name="slide-fade-left">
      <div class="panel-left" v-if="show"></div>
    </Transition>
    <Transition name="slide-fade-right">
      <div class="panel-right" v-if="show"></div>
    </Transition>
  </div>
</template>

<script>
import MainNavbar from "./MainNavbar.vue";

import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    MainNavbar,
  },
  setup() {
    const show = ref(true); // Always show the element initially

    onMounted(() => {
      setTimeout(() => {
        show.value = false; // Hide the element after 0.5 seconds
      }, 500);
    });

    return { show };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.panel-left {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: black;
  z-index: 2;
}

.panel-right {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background-color: black;
  z-index: 2;
}

.slide-fade-left-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-left-leave-active {
  transition: all 1.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-100%);
  opacity: 0.9;
}

.slide-fade-right-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-right-leave-active {
  transition: all 1.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(100%);
  opacity: 0.9;
}
</style>
