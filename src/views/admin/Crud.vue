<template>
    <div>
        <navbar />
        <v-container class="container_principal">
            <v-row>
                <v-col cols="12">
                    <v-simple-table class='crud_opiniones table table-striped table-bordered' fixed-header height="300px">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Usuario
                                    </th>
                                    <th class="text-left">
                                        ¿ES INDIGENA?
                                    </th>
                                    <th class="text-left">
                                        ¿CUAL TRIBU PERTENECE?
                                    </th>
                                    <th class="text-left">
                                        ¿TE GUSTO LA APLICACION?
                                    </th>
                                    <th class="text-left">
                                        ¿CALIFICACION QUE LE DIO A LA APP?
                                    </th>
                                    <th class="text-left">
                                        ¿COMENTARIOS?
                                    </th>
                                    <th class="text-left">
                                        ACCIONES
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in User" :key="item.name">
                                    <td>{{ item.user }}</td>
                                    <td>{{ item.indigenaEs}}</td>
                                    <td>{{ item.indigenaPer }}</td>
                                    <td>{{ item.gustoSiNo }}</td>
                                    <td>{{ item.gustoSiNo }}</td>
                                    <td>{{ item.gustoSiNo }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
.container_principal {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-content: center;
    /*border: 2px solid red !important;*/
}


.column_opciones {
    /*border: 2px solid blue !important;*/
    display: flex !important;
    justify-content: center !important;
    align-items: center;

}


.column_opciones section {
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 200px;
    height: 180px;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    /*border: 2px solid black ! important;*/
}

.crud_opiniones {
    border: 1px solid grey !Important;
}

.crud_opiniones thead th ,.crud_opiniones tbody th {
    border:2px solid grey !Important;
}

/*.crud_opiniones thead,
.crud_opiniones thead td {
    border: 1px solid grey !important;
}*/
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
            User: []
        }
    },
    methods: {
        readUser: function() {
            const dbencuesta = firebase.database().ref();
            const Estudiante = dbencuesta.child('DATOS_ENCUESTA');
            Estudiante.on("child_added", snap => {
                let encuesta = snap.val();
                this.User.push(encuesta);
            })
        }
    },
    mounted() {
        // invocar los métodos
        this.readUser();
    }


}
</script>