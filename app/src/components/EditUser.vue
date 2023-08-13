<template>
    <v-dialog v-model="showDialog">
        <v-card class="pb-2">
            <v-card-title>Edit user</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field 
                                dense
                                outlined
                                label="Name"
                                :value="itemToBeEdited.name"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field 
                                dense
                                outlined
                                label="Email"
                                :value="itemToBeEdited.email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                dense
                                outlined
                                label="Role"
                                :value="itemToBeEdited.role"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="error">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Update</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'EditUser',
    props: [
        'itemToBeEdited',
    ],
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