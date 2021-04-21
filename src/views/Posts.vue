<template>
  <v-card class="mx-auto mt-8" max-width="800">
    <v-container>
      <div v-for="post in posts" :key="post.id">
        <v-row class="pa-2">
          <v-col cols="12">
            <v-card :color="changeColor(post.id)">
              <v-card-title class="text-h5">{{ post.title }}</v-card-title>

              <v-card-subtitle>{{ post.body }}</v-card-subtitle>

              <v-card-actions>
                <v-btn text> Delete </v-btn>
                <v-btn text> Edit </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Posts',

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Username', value: 'username' },
      { text: 'email', value: 'email' },
      { text: 'Actions', align: 'end', value: 'actions', sortable: false },
    ],
    posts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      username: 0,
      email: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      username: 0,
      email: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  watch: {
    dialog(val) {
      return val || this.close();
    },
    dialogDelete(val) {
      return val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.posts = [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body:
            'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body:
            'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        },
        {
          userId: 1,
          id: 4,
          title: 'eum et est occaecati',
          body:
            'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
        },
      ];
    },

    changeColor(id) {
      if (id % 3 === 0) return '#AD1457AA';
      if (id % 2 === 0) return '#00695CAA';
      if (id % 1 === 0) return '#F57F17AA';

      return '#1565c0AA';
    },

    editItem(item) {
      this.editedIndex = this.posts.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.posts.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.posts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.posts[this.editedIndex], this.editedItem);
      } else {
        this.posts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
