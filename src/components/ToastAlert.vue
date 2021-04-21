<template>
  <v-row id="box" justify="end" class="mt-4 mr-3">
    <v-alert
      :value="toastVisibility"
      border="left"
      width="350"
      elevation="6"
      :type="toastType"
      dismissible
      transition="slide-x-reverse-transition"
    >
      {{ toastMessage }}
    </v-alert>
  </v-row>
</template>

<script>
export default {
  name: 'ToastAlert',

  computed: {
    toastVisibility() {
      return this.$store.state.toastAlert.visibility;
    },
    toastType() {
      return this.$store.state.toastAlert.type;
    },
    toastMessage() {
      return this.$store.state.toastAlert.message;
    },
  },
};
</script>

<style scoped>
#box {
  position: absolute;
  top: 64px;
  right: 0;
}
</style>
