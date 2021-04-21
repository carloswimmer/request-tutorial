<template>
  <v-overlay :value="loading">
    <v-progress-circular
      indeterminate
      size="66"
      :color="circleColor"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: 'loading',

  computed: {
    loading() {
      return this.$store.state.loading;
    },
    circleColor() {
      return this.$vuetify.theme.dark ? 'default' : 'primary';
    },
  },
};
</script>
