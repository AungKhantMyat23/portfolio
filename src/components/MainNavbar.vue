<template >
  <div
    style="margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0"
  >
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#" class="logo" style="font-size: 40px"
        >Logo</b-navbar-brand
      >

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="nav-link">ABOUT</b-nav-item>
          <b-nav-item href="#" class="nav-link">PROJECTS</b-nav-item>
          <b-nav-item href="#" class="nav-link">RESUME</b-nav-item>
          <b-nav-item href="#" class="nav-link">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-button
        v-b-toggle.sidebar-right
        id="sidemenu-open-btn"
        class="ml-auto"
        style="
          background-color: transparent !important;
          border: none !important;
        "
      >
        <span class="material-symbols-outlined"> menu </span>
      </b-button>
    </b-navbar>
    <b-sidebar id="sidebar-right" no-header right shadow #default="{ hide }">
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item href="#" class="nav-link ml-auto" @click="hide">
              <span class="material-symbols-outlined close-btn"> close </span>
            </b-nav-item>
            <b-nav-item href="#" class="nav-link">ABOUT</b-nav-item>
            <b-nav-item href="#" class="nav-link top-link">PROJECTS</b-nav-item>
            <b-nav-item href="#" class="nav-link top-link">RESUME</b-nav-item>
            <b-nav-item href="#" class="nav-link top-link">CONTACT</b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand:wght@300..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&display=swap");
.logo {
  color: black !important;
  font-family: "Arsenal SC", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin-left: 20px;
}

.b-navbar-brand {
  font-size: 50px !important;
}

.nav-link {
  font-family: "Quicksand", sans-serif;
  color: black !important;
}

.navbar-nav .nav-item {
  text-decoration: none;
  color: black !important;
  transition: transform 0.3s ease-in-out;
  position: relative;
}

.navbar-nav .nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: black;
  transition: width 0.3s ease-in-out;
}

.navbar-nav .nav-item:hover {
  transform: translateY(-5px);
}

.navbar-nav .nav-item:hover::after {
  width: 100%;
}
//Side Nav Menu

#sidebar-right {
  width: 100vh;
  opacity: 0;
}

#sidebar-right {
  opacity: 1;
  animation: lineFadeIn 1s ease-in-out forwards;
}

.nav .nav-link {
  color: black !important;
}

.nav .top-link {
  border-top: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.nav .top-link::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: black;
  animation: lineFadeIn 1s ease-in-out forwards;
}

@keyframes lineFadeIn {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

.material-symbols-outlined {
  color: black;
}

@media (min-width: 992px) {
  #sidemenu-open-btn {
    display: none !important;
  }
}
.close-btn {
  font-size: 40px;
  opacity: 0;
  transform: rotate(0deg);
  animation: spinAndAppear 2s ease-out forwards;
}

@keyframes spinAndAppear {
  0% {
    opacity: 0;
    transform: rotate(70deg);
  }
  50% {
    opacity: 0.5;
    transform: rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: rotate(180deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  method: {},
};
</script>
