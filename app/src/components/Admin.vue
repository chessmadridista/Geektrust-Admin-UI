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
          v-model="selectedUsers"
          class="elevation-2"
          show-select
          :headers="headers"
          :items="getUsers"
          :page.sync="selectedPage"
          :search="tableSearchTerm"
          hide-default-footer
        >
          <template
            v-slot:[`item.actions`]="{ item }"
          >
            <v-icon @click="editUser(item)" color="primary">mdi-pencil</v-icon>
            <v-icon @click="deleteUser(item)" color="error">mdi-delete</v-icon>
          </template>
        </v-data-table>
        <v-pagination
          class="mt-2"
          v-model="selectedPage"
          :length="getNumberOfPages"
        >
        </v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn block color="error"
          :disabled="selectedUsers.length === 0"
          @click="deleteSelectedUsers"
        >
          Delete selected users
        </v-btn>
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
    selectedUsers: [],
    selectedPage: 1,
  }),
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getNumberOfPages() {
      const users = this.getUsers;
      let usersLength = users.length / 10;

      if (users.length % 10 !== 0) {
        usersLength += 1;
      }

      return usersLength;
    },
  },
  methods: {
    capitalizeRole(data) {
      for (let user of data) {
        const role = user.role;
        user.role = role.charAt(0).toUpperCase() + role.slice(1);
      }
    },
    editUser(user) {
      console.log(`User = ${user}`);
      this.$store.dispatch('setUserToBeEdited', user);
      this.$store.dispatch('showDialog');
    },
    deleteUserFromSelectedUsers(deletedUser) {
      if (this.selectedUsers.indexOf(deletedUser) >= 0) {
        this.selectedUsers = this.selectedUsers.filter((user) => {
          return user !== deletedUser;
        });
      } 
    },
    deleteUser(user) {
      this.$store.dispatch('deleteUser', user);
      this.deleteUserFromSelectedUsers(user);
    },
    deleteSelectedUsers() {
      for (let user of this.selectedUsers) {
        this.$store.dispatch('deleteUser', user);
      }

      this.selectedUsers = [];
    },
  },
  beforeCreate() {
    const API_ENDPOINT = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
    fetch(API_ENDPOINT)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // this.users = data;
      this.capitalizeRole(data);
      this.$store.dispatch('setUsers', data);
    });
  },
}
</script>
