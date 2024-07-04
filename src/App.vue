<template>
  <HomePage :style="{ marginRight: '0', paddingRight: '0' }" />
</template>
<style></style>
<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>
