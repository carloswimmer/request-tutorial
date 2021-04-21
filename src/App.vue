<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
    <loading />
    <toast-alert />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import ToastAlert from './components/ToastAlert';
import Loading from './components/Loading';

export default {
  name: 'App',

  components: { Navbar, ToastAlert, Loading },

  mounted() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
