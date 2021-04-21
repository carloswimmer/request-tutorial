<template>
  <div>
    <v-card class="mx-auto my-8" max-width="800">
      <v-container>
        <v-card-title class="text-h5">User</v-card-title>
        <v-row class="pa-2" justify="center" align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="userId"
              :items="users"
              dense
              filled
              label="Name"
              item-text="name"
              item-value="id"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="mx-auto mt-8" max-width="800">
      <v-container>
        <v-card-title class="text-h5">
          Posts
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="editItem()">
            New Item
          </v-btn>
        </v-card-title>
        <div v-for="post in posts" :key="post.id">
          <v-row class="pa-2">
            <v-col cols="12">
              <v-card :color="changeColor(post.id)">
                <v-card-title class="text-h5">
                  {{ post.title | capitalize }}
                </v-card-title>

                <v-card-subtitle>
                  {{ post.body | capitalize }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text @click="editItem(post)"> Edit </v-btn>
                  <v-btn text @click="deleteItem(post)"> Delete </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    filled
                    v-model="editedItem.title"
                    label="Title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    filled
                    v-model="editedItem.body"
                    label="Body"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline"
            >Are you sure you want to delete this item?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >OK</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import fakeUsers from '../../support/sample-data/Users.json';
import fakePosts from '../../support/sample-data/Posts.json';

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
    users: [],
    userId: null,
    posts: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      body: '',
      userId: '',
    },
    defaultItem: {
      title: '',
      body: '',
      userId: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
    userIdValue() {
      return this.userId;
    },
  },

  watch: {
    dialog(val) {
      return val || this.close();
    },
    dialogDelete(val) {
      return val || this.closeDelete();
    },
    userIdValue(changed) {
      this.posts = fakePosts.filter(post => post.userId === changed);
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.users = fakeUsers;
    },

    changeColor(id) {
      if (id % 3 === 0) return '#AD1457AA';
      if (id % 2 === 0) return '#00695CAA';
      if (id % 1 === 0) return '#F57F17AA';

      return '#1565c0AA';
    },

    editItem(item) {
      this.editedIndex = this.posts.indexOf(item);
      this.editedItem = { ...item, userId: this.userId };
      this.dialog = true;
    },

    deleteItem(item) {
      console.log('post', item);
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
