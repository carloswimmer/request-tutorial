<template>
  <v-container>
    <v-row class="pa-4" justify="center" align-content="center" v-if="loading">
      <p class="headline">
        Carregando...
      </p>
    </v-row>
    <v-row class="pa-4" justify="center" align-content="center" v-else>
      <v-img
        alt="Frame"
        class="shrink"
        src="../assets/Frame.svg"
        transition="scale-transition"
        width="144"
      />
      <div class="text-no-result">
        <p class="headline text-left">
          Não encontramos resultados para essa busca.
        </p>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'no-results',

  computed: {
    loading() {
      return this.$store.state.loadingDataTable;
    },
  },
};
</script>


<style scoped>
.text-no-result {
  display: flex;
  align-items: center;
  margin-left: 32px;
  max-width: 320px;
  min-height: 150px;
  color: #003633;
}
</style>

