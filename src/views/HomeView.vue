<template>
    <div style='height:100vh;display:flex;justify-content:center;align-content:center;align-items:center;background-color: rgb(225, 213, 201, 0.5)  !important;'>
        <v-card color='#6D4C41' outlined shaped fluid width='85%' height='62vh' style='padding:0.7rem;' elevation='3' dark>
            <v-card-title class='d-flex justify-center align-items-center'>
                <h1>BIENVENIDOS</h1>
            </v-card-title>
            <v-card-subtitle class='mt-1 d-flex justify-center align-items-center'><strong>KHIPAR-APP</strong></v-card-subtitle>
            <v-card-text>
                <v-form class="mt-10" style="padding:1rem" @submit.prevent="Verificar">
                    <v-text-field required :rules="nombreRules" placeholder="Ingrese su usuario" v-model="user" prepend-inner-icon="mdi-account-tie" outlined></v-text-field>
                    <v-text-field v-model="contraseña" placeholder="Ingrese una contraseña" :rules="contraseñaRules" prepend-inner-icon="mdi-lock" outlined required></v-text-field>
                    <br />
                    <v-btn type="submit" block rounded x-large color="grey darken-1" dark>
                        Ingresar cuenta
                    </v-btn>
                    <br />
                    <v-btn to='/registroUser' block rounded x-large color="brown lighten-1" dark>
                        Registrarme
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import inicio from '../components/InicioUser.vue';
import registro from '../components/RegistroUser.vue';
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';
import Swal from 'sweetalert2';
import router from "@/router";


export default {
    components: {
        inicio,
        registro,
    },
    data() {
        return {
            showModal: false,
            user: '',
            contraseña: '',
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
        Verificar: function() {
            var passwordBD = this.contraseña;
            var usuario = this.user;
            var existe = new Boolean(false);
            if (passwordBD != "" && passwordBD != " " && usuario != "" && usuario != " ") {
                firebase.database().ref("DATOS_ENCUESTA/").orderByChild("user").equalTo(usuario).once("value").then(function(snapshot) {
                    if (snapshot.exists()) {
                        snapshot.forEach(function(childSnapshot) {
                            var user = childSnapshot.val();
                            if (user.contraseña == passwordBD) {
                                existe = true;
                                console.log('se encuentra en la base de datos')
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Bienvenido a la aplicacion',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                  this.$router.push({ name: 'aplicacion' });
                            }


                        });
                    } else {
                        existe = true;
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Usuario no encontrado',
                        })
                    }
                });
                if (existe == false) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Contraseña incorrecta',
                    })
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor ingrese los datos correspondientes',
                })
            }

        }


    }
}

</script>
<style scoped>
</style>