<template>
    <div id='app' style='height:100vh;display:flex;justify-content:center;align-content:center;align-items:center;background-color: rgb(225, 213, 201, 0.5)  !important;'>
        <v-card color='#6D4C41' outlined shaped fluid width='95%' style='padding:0.7rem;' elevation='3' dark>
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
import router from "@/router";


export default {
    components: {
        inicio,
        registro,
    },
    data() {
        return {
            showModal: false,
            myMessage: 'Hola desde el componente padre!',
            user: '',
            contraseña: '',
            dialog: false,
            miVariableGlobal: '',
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
            const self = this;
            var passwordBD = this.contraseña;
            var usuario = this.user;
            var existe = new Boolean(false);
            if (passwordBD != "" && passwordBD != " " && usuario != "" && usuario != " ") {
                // Guarda la referencia a `this` en una variable
                var vm = this;
                firebase.database().ref("DATOS_ENCUESTA/").orderByChild("user").equalTo(usuario).once("value").then(function(snapshot) {
                    if (snapshot.exists()) {
                        snapshot.forEach(function(childSnapshot) {
                            var user = childSnapshot.val();
                            if (user.contraseña == passwordBD) {
                                existe = true;
                                // Actualiza la variable global con el usuario
                                vm.$root.$miVariableGlobal = self.user;
                                router.push('/aplicacion');
                                localStorage.setItem('UserActual', self.user);
                                
                            }
                        });
                    } else {
                        alert('por favor ingrese los datos correspondientes');
                    }
                });
            }
        },
    },
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