<template>
    <div>
        <navbar />
        <v-container class="container_principal">
            <v-row>
                <v-col class="column_opciones d-flex justify-center" cols="4">
                    <section @click.stop="dialog = true">
                        1
                        <!--
                        <modaldichos />
                    -->
                    </section>
                </v-col>
                <v-col class="column_opciones d-flex justify-center" cols="4">
                    <section>
2
                        <!--
                      <modaloraciones />
                  -->
                    </section>
                </v-col>
                <v-col class="column_opciones d-flex justify-center" cols="4">
                    <section>
                        3
                        <!--
                    <modalvocales />
                -->
                    </section>
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
</style>
<script>
import { mapActions } from 'vuex'


export default {
    components: {
       /* navbar: () => import("../components/admin/navbarAdmin.vue"),
        modaldichos: () => import("../components/admin/modalDichos.vue"),
        modaloraciones: () => import("../components/admin/modalOraciones.vue"),
        modalvocales: () => import("../components/admin/modalVocales.vue")*/
    },
    data() {
        return {
            /*dialog: false*/
        }
    }

    

}
</script>