<template>
    <v-dialog :value="showDialog">
        <v-card>
            <v-card-title>Edit user</v-card-title>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'EditUser',
    props: [
        'showDialog',
    ],
}
</script>