<template>
    <div style='height:100vh;display:flex;justify-content:center;align-content:center;align-items:center;background-color: rgb(225, 213, 201, 0.9) !important;'>
        <v-form @submit.prevent="addUser" align="center" justify="center" class='d-flex justify-center align-items-center' style="border:none" elevation="0">
            <v-card color='#6D4C41' style="height:97vh;padding:1.8rem !important;width:80%;" outlined shaped align="center" justify="center" dark>
                <v-row>
                    <v-col cols='1' style='display:flex;justify-content:center;align-items:center;align-content:center;padding:0 !important' align='left'>
                        <v-btn class="mx-2" fab dark small color="brown lighten-1" to='/'>
                            <v-icon dark>
                                mdi-arrow-left-bold-circle
                            </v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols='11'>
                        <h1 class='text-center mb-5 mt-5'>Puedes registrarte en nuestra aplicacion</h1>
                    </v-col>
                </v-row>
                <v-row class='mt-3'>
                    <v-text-field style='width:100%' v-model="newEncuesta.user" placeholder="User" outlined required :rules="nombreRules" ></v-text-field>
                    <v-text-field style='width:100%'  :rules="emailRules" placeholder="Email" v-model="newEncuesta.email" outlined required></v-text-field>
                    <v-col>
                        <v-container fluid align="center" justify="center">
                            <h5>¿Pertenes a una tribu indigena?</h5>
                            <v-radio-group v-model="newEncuesta.indigenaEs" row required="true" justify='center' align="center">
                                <div style='width:100vw;display:flex;justify-content:center'>
                                    <v-radio label="Si Pertenezco" value="Si Pertenezco"></v-radio>
                                    <v-radio label="No Pertenezco" value="No Pertenezco"></v-radio>
                                </div>
                            </v-radio-group>
                        </v-container>
                    </v-col>
                    <v-text-field style='width:100%' v-model="newEncuesta.indigenaPer" placeholder="¿Cual tribu indigena perteneces?" outlined required></v-text-field>
                    <v-text-field style='width:100%' v-model="newEncuesta.contraseña" placeholder="Ingrese una contraseña" :rules="contraseñaRules" outlined required></v-text-field>
                    <v-text-field style='width:100%' placeholder="Repite la contraseña" v-model="contraseña2" :rules="contraseñaRules" outlined required></v-text-field>
                    <v-btn color="brown lighten-1" depressed type="submit" block>
                        Registrar
                    </v-btn>
                </v-row>
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
                user: '',
                email: '',
                contraseña: '',
                indigenaEs: '',
                indigenaPer: '',
                comentarios: '',
                puntaje: '',
                gustoSiNo: '',
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
            firebase.database().ref('DATOS_ENCUESTA/' + this.newEncuesta.user).set({
                user: this.newEncuesta.user,
                email: this.newEncuesta.email,
                contraseña: this.newEncuesta.contraseña,
                indigenaEs: this.newEncuesta.indigenaEs,
                indigenaPer: this.newEncuesta.indigenaPer,
                comentarios: 'null',
                puntaje: 'null',
                gustoSiNo: 'null',
            });
            this.newEncuesta.user = '';
            this.newEncuesta.email = '';
            this.newEncuesta.contraseña = '';
            this.newEncuesta.indigenaEs = '';
            this.newEncuesta.indigenaPer = '';
            this.contraseña2 = '';
            this.comentarios = '';
            this.puntaje = '';
            this.gustoSiNo = '';

        }
    }
}
</script>
<style scoped>
</style>