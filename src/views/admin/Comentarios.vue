<template>
    <div>
        <navbar />
        <v-container>
            <v-row>
                <v-col cols="12" sm="4" v-for="i in desserts" :key="i.user">
                    <v-card class="mx-auto my-12" max-width="374">
                        <v-img height="200" src="@/assets/imgBienvenida.png" contain></v-img>
                        <v-card-title>{{i.user}}</v-card-title>
                        <v-card-text>
                            <v-row class="mx-0">
                                <div class="grey--text mr-3">
                                    <strong>Te gusto la aplicacion</strong>
                                    <v-chip-group active-class="green white--text mt-5">
                                        <v-chip class="justify-center" color="success" outlined v-if="i.gustoSiNo =='SI' " style='pointer-events:none !important;'>
                                            <v-icon left> mdi-emoticon-happy-outline</v-icon>
                                            Si
                                        </v-chip>
                                        <v-chip class="ma-2 justify-center" color="deep-orange" outlined v-if="i.gustoSiNo=='NO' " style='pointer-events:none !important;'>
                                            <v-icon left> mdi-emoticon-angry </v-icon>
                                            No
                                        </v-chip>
                                    </v-chip-group>
                                </div>
                                <v-rating :value="i.puntaje" color="amber" dense half-increments readonly size="14"></v-rating>
                            </v-row>
                            <br>
                            <div class="my-4 text-subtitle-1">
                                <strong>Comentarios</strong><br>
                                <p>
                                    {{i.comentarios}}
                                </p>
                            </div>
                            <div>
                            </div>
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-title>Eres indigena?</v-card-title>
                        <v-card-text>
                            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                                <v-chip>{{i.indigenaEs}}</v-chip>
                                <v-chip>{{i.indigenaPer}}</v-chip>
                            </v-chip-group>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';


export default {
    name: 'Comentarios',
    components: {
        navbar: () => import("/src/components/admin/navbarAdmin.vue"),
    },
    data() {
        return {
            i: 0,
            gustoSiNo: '',
            /*dialog: false*/
            desserts: [],
            //headers: ['USUARIO', '¿ES INDIGENA?', 'TRIBU QUE PERTENECE', '¿TE GUSTO LA APLICACION?', 'CALIFICACION QUE LE DIO A LA APP', 'COMENTARIOS']
        }
    },
    methods: {
        readUser: function() {
            const dbencuesta = firebase.database().ref();
            const Estudiante = dbencuesta.child('DATOS_ENCUESTA');
            Estudiante.on("child_added", snap => {
                let datosEncuesta = snap.val();
                var encuesta = {
                    user: datosEncuesta.user,
                    indigenaEs: datosEncuesta.indigenaEs,
                    indigenaPer: datosEncuesta.indigenaPer,
                    gustoSiNo: datosEncuesta.gustoSiNo,
                    puntaje: datosEncuesta.puntaje,
                    comentarios: datosEncuesta.comentarios,
                };
                this.desserts.push(encuesta)
            })
        }
    },
    mounted() {
        this.readUser();
    }

}
</script>