<template>
    <div id='app' style='height:100vh;display:flex;justify-content:center;align-content:center;align-items:center;background-color: rgb(225, 213, 201, 0.5)  !important;'>
        <v-card color='#6D4C41' outlined shaped fluid width='85%' style='padding:0.7rem;' elevation='3' dark>
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
                <mi-componente miVariable="Hola, mundo!" />
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    Use Google's location service?
                </v-card-title>
                <v-card-text>
                    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text>
            </v-card>
        </v-dialog>
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

import MiComponente  from '/src/components/encuesta_form.vue'


export default {
    components: {
        inicio,
        registro,
        MiComponente ,
    },
    data() {
        return {
            showModal: false,
            myMessage: 'Hola desde el componente padre!',
            user: '',
            contraseña: '',
            dialog: false,
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
                                console.log('se encuentra en la base de datos');
                                router.push('/aplicacion')
                            }


                        });
                    } else {
                        alert('por favor ingrese los datos correspondientes');
                    }
                });

            }
        },
        handleMessage(value) {
            this.myMessage = value
        }
    }

}
</script>
<style scoped>
@media (max-width: 1024px) {
    #app {
        overflow-y: hidden !important;
        height: 100vh !important;
    }
}

@media (min-width: 1025px) {
    #app {
        display: none !important;
    }
}

::-webkit-scrollbar {
    display: none !important;
}
</style>