<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field 
          outlined
          dense
          background-color="#fff"
          label="Search by name, email or role"
          v-model="tableSearchTerm"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          class="elevation-2"
          :headers="headers"
          :items="users"
          :search="tableSearchTerm"
        >
          <template
            v-slot:[`item.actions`]="{ user }"
          >
            <v-icon @click="editUser(user)" color="primary">mdi-pencil</v-icon>
            <v-icon @click="deleteItem(user)" color="error">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <EditUser />
  </v-container>
</template>
<script>
import EditUser from './EditUser.vue';

export default {
  name: 'AdminView',
  components: {
    EditUser,
  },
  data: () => ({
    tableSearchTerm: '',
    headers: [
      {
        text: 'Checkbox',
        value: 'checkbox',
      },
      {
        text: 'Name',
        value: 'name',
      },
      {
        text: 'Email',
        value: 'email',
      },
      {
        text: 'Role',
        value: 'role',
      },
      {
        text: 'Actions',
        value: 'actions',
      },
    ],
    users: [],
  }),
  methods: {
    capitalizeRole() {
      for (let user of this.users) {
        const role = user.role;
        user.role = role.charAt(0).toUpperCase() + role.slice(1);
      }
    },
    editUser(user) {
      this.$store.dispatch('setUserToBeEdited', user);
      this.$store.dispatch('showDialog');
    },
    deleteUser(user) {
      this.$store.dispatch('deleteUser', user);
    },
  },
  beforeCreate() {
    const API_ENDPOINT = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
    fetch(API_ENDPOINT)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.users = data;
      this.capitalizeRole();
    });
  },
}
</script>
