<template>
    <v-dialog v-model="showDialog">
        <v-card class="pb-2">
            <v-card-title class="justify-center blue--text text--darken-2">Edit user</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field 
                                dense
                                outlined
                                label="Name" 
                                v-model="$store.state.userToBeEdited.name"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field 
                                dense
                                outlined
                                label="Email"
                                v-model="$store.state.userToBeEdited.email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                dense
                                outlined
                                label="Role"
                                v-model="$store.state.userToBeEdited.role"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="error" @click="cancel">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="update">Update</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'EditUser',
    data() {
        return {
            userToBeEdited: {},
        };
    },
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
    methods: {
        cancel() {
            this.$store.dispatch('hideDialog');
        },
        update() {
            this.userToBeEdited = this.$store.state.userToBeEdited;
            this.$store.dispatch('updateUser', this.userToBeEdited);
            this.$store.dispatch('hideDialog');
        },
    },
}
</script>