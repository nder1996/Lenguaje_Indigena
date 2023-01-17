<template>
    <div>
        <br />
        <v-form class="mt-10" style="padding:1rem" @submit.prevent="Verificar">
            <v-text-field required :rules="nombreRules" placeholder="Ingrese su usuario" v-model="user" outlined></v-text-field>
            <v-text-field v-model="contraseña" placeholder="Ingrese una contraseña" :rules="contraseñaRules" outlined required></v-text-field>
            <v-btn type="submit" block>
                Ingresar cuenta
            </v-btn>
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
            /* const verificar = firebase.database().ref('DATOS_ENCUESTA/').equalTo(this.email);
             console.log("verificar : " + verificar);*/
            var ratingRef = firebase.database().ref("DATOS_ENCUESTA/");
            ratingRef.orderByChild("user").equalTo(this.user).on("child_added", function(data) {
                console.log("Equal to USER: " + data.val().user);
                console.log("Equal to CONTRASEÑA: " + data.val().contraseña);
            });
        }
    }
}
</script>