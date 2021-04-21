<template>
  <v-app light>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
    <toast-alert />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: { Navbar },
};
</script>
