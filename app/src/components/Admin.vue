<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="users"
        >

        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'AdminView',
    data: () => ({
      headers: [
        {
          text: 'Checkbox',
          value: 'id',
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
          value: 'role',
        },
      ],
      users: [],
    }),
    beforeCreate() {
      const API_ENDPOINT = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
      fetch(API_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.users = data;
      });
    },
  }
</script>
