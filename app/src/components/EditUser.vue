<template>
    <v-dialog v-model="showDialog">
        <v-card>
            <v-card-title>Edit user</v-card-title>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'EditUser',
    computed: {
        showDialog: {
            get() {
                return this.$store.state.showDialog;
            },
            set(showDialog) {
                if (showDialog) {
                    this.$store.dispatch('showDialog');
                } else {
                    this.$store.dispatch('hideDialog');
                }
            }
        },
    },
}
</script>