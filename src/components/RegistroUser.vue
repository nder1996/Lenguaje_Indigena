<template>
    <div>
        <v-form @submit.prevent="addUser" align="center" justify="center" class='d-flex justify-center align-items-center' style="border:none" elevation="0">
            <v-card style="height:85vh;padding:1rem !important;width:80vw" outlined shaped align="center" justify="center">
                <h1 class='text-center mb-5 mt-5'>Bienvenido Khipar-App</h1>
                <v-text-field v-model="newEncuesta.nombre" placeholder="Nombre" outlined required :rules="nombreRules"></v-text-field>
                <v-text-field required :rules="emailRules" placeholder="Email" v-model="newEncuesta.email" outlined></v-text-field>
                <v-container fluid align="center" justify="center">
                    <h5>¿Pertenes a una tribu indigena?</h5>
                    <v-radio-group v-model="newEncuesta.indigenaEs" row required="true" justify='center' align="center">
                        <div class='d-flex justify-center align-items-center flex-row' style='border:2px solid red !Important'>
                            <v-radio label="Si Pertenezco" value="Si Pertenezco"></v-radio>
                            <v-radio label="No Pertenezco" value="No Pertenezco"></v-radio>
                        </div>
                    </v-radio-group>
                </v-container>
                <v-text-field v-model="newEncuesta.indigenaPer" placeholder="¿Cual tribu indigena perteneces?" outlined required></v-text-field>
                <v-text-field v-model="newEncuesta.contraseña" placeholder="Ingrese una contraseña" :rules="contraseñaRules" outlined required></v-text-field>
                <v-text-field placeholder="Repite la contraseña" v-model="contraseña2" :rules="contraseñaRules" outlined required></v-text-field>
                <v-btn depressed type="submit" block>
                    Registrar
                </v-btn>
            </v-card>
        </v-form>
    </div>
</template>
<script>
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';



export default {
    data() {
        return {
            contraseña2: '',
            newEncuesta: {
                nombre: '',
                email: '',
                contraseña: '',
                indigenaEs: '',
                indigenaPer: '',
                comentario: '',
                puntaje: '',
            },
            nombreRules: [
                v => !!v || 'Por favor ingrese su nombre',
                v => v.length <= 55 || 'Ingrese un nombre correcto',
            ],
            emailRules: [
                v => !!v || 'Por favor ingrese su Email',
                v => /.+@.+\..+/.test(v) || 'Ingrese un email valido',
            ],
            contraseñaRules: [
                v => !!v || 'Por favor ingrese su Contraseña',
            ],
        }
    },
    methods: {
        addUser: function() {
            console.log('nuevo usuario' + this.newEncuesta)
            firebase.database().ref('DATOS_ENCUESTA/' + this.newEncuesta.email).set({
                nombre: this.newEncuesta.nombre,
                email: this.newEncuesta.email,
                contraseña: this.newEncuesta.contraseña,
                indigenaEs: this.newEncuesta.indigenaEs,
                indigenaPer: this.newEncuesta.indigenaPer,
            });
            this.newEncuesta.nombre = '';
            this.newEncuesta.email = '';
            this.newEncuesta.contraseña = '';
            this.newEncuesta.indigenaEs = '';
            this.newEncuesta.indigenaPer = '';
            this.contraseña2 = '';
        }
    }
}
</script>
<style scoped>
</style>