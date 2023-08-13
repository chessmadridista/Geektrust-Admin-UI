<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <v-app-bar-title class="title">Admin Dashboard</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Admin />
    </v-main>
  </v-app>
</template>

<script>
import Admin from './components/Admin';

export default {
  name: 'App',

  components: {
    Admin,
  },

  data: () => ({
    //
  }),
};
</script>
