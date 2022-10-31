<template>
    <v-row justify="center">
        <v-dialog v-model="dialogmodalBtn" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dichos
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialogmodalBtn = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>DICHOS</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="dialogmodalBtn = false" class='text-uppercase'>
                            Cerrar
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1" style="border:2px solid red !important;width:80%;margin:auto">
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>My CRUD</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                        New Item
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-form @submit.prevent="registerUser">
                                                    <v-text-field type="text" placeholder="Firstname" v-model="userData.firstname" ></v-text-field> 
                                                    
                                                    <v-text-field type="text" placeholder="Lastname" v-model="userData.lastname" ></v-text-field> <br>
                                                    <v-text-field type="text" placeholder="Username" v-model="userData.username" ></v-text-field> <br>
                                                    <v-text-field type="email" placeholder="Email" v-model="userData.email" ></v-text-field> <br>
                                                    <v-text-field type="password" placeholder="Choose a password" v-model="userData.password"></v-text-field>
                                                  
                                                  
                                                    </v-form>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">
                                            Cancel
                                        </v-btn>
                                        <v-btn color="blue darken-1" text @click="save">
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template>
                        <v-icon small class="mr-2">
                            mdi-pencil
                        </v-icon>
                        <v-icon small>
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
// /src/components/Register.vue


export default {
    data: () => ({
        dialogmodalBtn: false,
        dialog: false,
        dialogDelete: false,
        headers: [{
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'DICHO', value: 'calories' },
            { text: 'AUDIO - DICHO', value: 'fat' },
        ],
        userData: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        },
        successMessage: '',
        errorMessage: ''

    })
}
</script>