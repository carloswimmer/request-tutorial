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

      <v-btn to="/" icon>
        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>

      <v-btn to="posts" icon>
        <v-icon>mdi-note-text-outline</v-icon>
      </v-btn>

      <v-btn to="albums" icon>
        <v-icon>mdi-image-album</v-icon>
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
