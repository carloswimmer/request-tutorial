<template>
  <nav>
    <v-app-bar app dark color="primary">
      <v-btn icon>
        <v-icon large>mdi-nfc-tap</v-icon>
      </v-btn>

      <v-toolbar-title
        >REQUEST
        <strong> TUTORIAL </strong>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" text class="mr-4">
        <v-icon left>mdi-account-multiple</v-icon>
        Users
      </v-btn>

      <v-btn to="posts" text>
        <v-icon left>mdi-note-text-outline</v-icon>
        Posts
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  methods: {},
};
</script>
