<template>
    <div style='display:flex;justify-content:center;align-content:center;align-items:center;background-color: rgb(225, 213, 201, 0.9) !important;height:100vh !important'>
        <v-form @submit.prevent="addUser" align="center" justify="center" class='d-flex justify-center align-items-center' style="border:none;width:100% !important" elevation="0">
            <v-row style='border:1px solid black !important' align='center' justify='center'>
                <v-col cols='12' align='center' justify='center'>
                    <v-stepper v-model="e1" style='width:80% !important;background-color: rgb(109, 76, 65) !important'>
                        <div style='display:flex;flex-direction:row;align-items:center;justify-content:start !important'>
                            <v-btn class="mx-2" fab dark small color="brown lighten-1" to='/'>
                                <v-icon dark>
                                    mdi-arrow-left-bold-circle
                                </v-icon>
                            </v-btn>&nbsp,&nbsp
                            <h3 class='text-center mb-5 mt-5 white--text'>PUEDES REGISTRARTE EN NUESTRA APLICACIÓN</h3>
                        </div>
                        <v-stepper-header>
                            <v-stepper-step :complete="e1 > 1" step="1" class='white--text'>
                                <span class="white--text">
                                    Ingrese tus datos
                                </span>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 2" step="2" class='white--text'>
                                <span class='white--text'>
                                    Perteneces a una tribu indigena
                                </span>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3" class='white--text'>
                                <span class='white--text'>
                                    Escribe tu contraseña
                                </span>
                            </v-stepper-step>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card class="mb-12" height="200px" style='background-color: rgb(109, 76, 65) !important'>
                                    <v-text-field style='width:100%' v-model="newEncuesta.user" placeholder="User" outlined required :rules="nombreRules" dark></v-text-field>
                                    <v-text-field style='width:100%' :rules="emailRules" placeholder="Email" v-model="newEncuesta.email" outlined required dark></v-text-field>
                                </v-card>
                                <v-btn color="brown lighten-1" @click="e1 = 2" dark>
                                    Continue
                                </v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <v-card class="mb-12" height="200px" style='background-color: rgb(109, 76, 65) !important'>
                                    <h5 class='white--text'>¿Pertenes a una tribu indigena?</h5>
                                    <v-radio-group v-model="newEncuesta.indigenaEs" row required="true" justify='center' align="center">
                                        <div style='width:100vw;display:flex;justify-content:center' dark>
                                            <v-radio label="Si Pertenezco" value="Si Pertenezco" dark></v-radio>
                                            <v-radio label="No Pertenezco" value="No Pertenezco" dark></v-radio>
                                        </div>
                                    </v-radio-group>
                                    <v-text-field style='width:100%' v-model="newEncuesta.indigenaPer" placeholder="¿Cual tribu indigena perteneces?" outlined required dark></v-text-field>
                                </v-card>
                                <v-btn color="brown lighten-1" @click="e1 = 3" dark>
                                    Continue
                                </v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <v-card class="mb-12" height="200px" style='background-color: rgb(109, 76, 65) !important'>
                                    <v-text-field style='width:100%' v-model="newEncuesta.contraseña" placeholder="Ingrese una contraseña" :rules="contraseñaRules" outlined required dark></v-text-field>
                                    <v-text-field style='width:100%' placeholder="Repite la contraseña" v-model="contraseña2" :rules="contraseñaRules" outlined required dark></v-text-field>
                                    <v-btn color="brown lighten-1" depressed type="submit" block dark>
                                        Registrar
                                    </v-btn>
                                </v-card>
                                <v-btn color="brown lighten-1" @click="e1 = 1" dark>
                                    Continue
                                </v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>
<script>
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';


//import ChildComponent from './ChildComponent.vue'


export default {
    data() {
        return {
            e1: 1,
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