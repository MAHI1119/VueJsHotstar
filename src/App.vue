<template>
  <div id="app">
    <VueScrollFixedNavbar>
      <header>
        <Navbar />
      </header>
    </VueScrollFixedNavbar>
    <router-view />

    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,

    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #001a33;
}
header {
  width: 100%;
  height: 80px;
  background-color: black;
}
VueScrollFixedNavbar {
  background-color: black;
  width: 100%;
  height: 80px;
}

@media (min-width: 100px) and (max-width: 441px) {
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    font-size: 10px;
  }
  span {
    font-size: 0.5rem;
    color: white;
  }
  .p-2 {
    padding: 0.5rem !important;
  }
}
</style>
