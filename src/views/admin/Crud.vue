<template>
    <div>
        <navbar />
        <v-container class="container_principal">
            <v-row>
                <v-col cols="12">
                    <v-card style='padding:1rem !Important'>
                        <v-simple-table elevation="2" style='padding:1rem !Important'>
                            <template v-slot:default>
                                <thead style='background-color: rgb(212, 167, 112) !important'>
                                    <tr>
                                        <th class="text-center" style='color:white !important'>
                                            USUARIO
                                        </th>
                                        <th class="text-center" style='color:white !important'>
                                            ¿ES INDIGENA?
                                        </th>
                                        <th class="text-center" style='color:white !important'>
                                            TRIBU QUE PERTENECE
                                        </th>
                                        <th class="text-center" style='color:white !important'>
                                            ¿TE GUSTO LA APLICACION?
                                        </th>
                                        <th class="text-center" style='color:white !important'>
                                            CALIFICACION QUE LE DIO A LA APP
                                        </th>
                                        <th class="text-center" style='color:white !important'>
                                            COMENTARIOS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class='tbody' v-for="item in desserts" :key="item.user" style='border:1px solid rgb(212, 167, 112) !important'>
                                        <td class="text-center" style='border:1px solid rgb(212, 167, 112) !important;  vertical-align: middle !important;'>
                                            <div>
                                                <p>
                                                    {{ item.user }}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="text-center" style='border:1px solid rgb(212, 167, 112) !important;  vertical-align: middle !important;'>
                                            <div>
                                                <p>
                                                    {{ item.indigenaEs }}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="text-center" style='border:1px solid rgb(212, 167, 112) !important;  vertical-align: middle !important;'>
                                            <div>
                                                <p>
                                                    {{ item.indigenaPer }}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="text-center" style='border:1px solid rgb(212, 167, 112) !important;  vertical-align: middle !important;'>
                                            <div>
                                                <p>
                                                    {{ item.gustoSiNo }}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="text-center" style='border:1px solid rgb(212, 167, 112) !important;  vertical-align: middle !important;'>
                                            <div>
                                                <p>
                                                    {{ item.puntaje }}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="text-center" style='border:1px solid rgb(212, 167, 112) !important;  vertical-align: middle !important;'>
                                            <div>
                                                <p>
                                                    {{ item.comentarios }}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
.tbody div {
    width: 150px !important;
    height: 150px !important;

    padding: 0 !important;
    margin: 0 !important;


}

.tbody div p {
    margin-top: 7px;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
}


.header {
    width: 190px !important;
    border: 1px solid white !important;
    margin: 0 !important;
    padding: 0 !Important;
    vertical-align: middle !important;
    text-align: center !important;
    background-color: rgb(212, 167, 112) !important;
    color: white !important;

    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    hyphens: auto !important;
}

.tdBody {
    vertical-align: middle !important;
    text-align: center !important;
    border: 1px solid rgb(212, 167, 112) !important;
}
</style>
<script>
import { mapActions } from 'vuex'
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';

export default {
    components: {
        navbar: () => import("/src/components/admin/navbarAdmin.vue"),
        modaldichos: () => import("/src/components/admin/modalDichos.vue"),
        modaloraciones: () => import("/src/components/admin/modalOraciones.vue"),
        modalvocales: () => import("/src/components/admin/modalVocales.vue")
    },
    data() {
        return {
            /*dialog: false*/
            desserts: [],
            headers: [{
                    text: 'USUARIO',
                    align: 'center',
                    sortable: false,
                    value: 'name',
                    class: 'header'
                },
                { text: '¿ES INDIGENA?', value: 'calories', align: 'center', class: 'header' },
                { text: 'TRIBU QUE PERTENECE', value: 'fat', align: 'center', class: 'header' },
                { text: '¿TE GUSTO LA APLICACION?', value: 'carbs', align: 'center', class: 'header' },
                { text: 'CALIFICACION QUE LE DIO A LA APP', value: 'protein', align: 'center', class: 'header' },
                { text: 'COMENTARIOS', value: 'iron', align: 'center', class: 'header' },
            ]
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
        // invocar los métodos
        this.readUser();
    }


}
</script>