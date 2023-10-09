<template>
    <v-container>
        <v-app-bar app elevation="0" class="appbar">
            <v-app-bar-nav-icon @click="drawer= !drawer" v-if="isMobile"></v-app-bar-nav-icon>
            <v-toolbar-title color='grey darken-3' class="text-uppercase">
                <strong style=' color: rgb(85, 67, 45)'>
                    Aplicacion Khipar
                </strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text class="white" @click="cerrarSesion">
                <span>Cerrar sesion</span>
                <v-icon>mdi-login-variant </v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer mobile-breakpoint="600" app floating v-model="drawer" class="withBackground navegation" src="" style='background-color:rgb(212, 167, 112) !important'>
            <v-list-item>
                <v-list-item-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="text-h8" style='color:white !important'>
                        Ana
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Administradora
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <br>
            <v-list nav dense>
                <v-list-item-group active-class="white--text navbarActive text--accent-4">
                    <v-list-item class='item_list' style='color:white !important' to="/crud">
                        <v-list-item-icon class='ico_list' style='color:white !important'>
                            <v-icon class='ico_list' style='color:white !important'>mdi-card-account-details-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Datos de los usuarios</v-list-item-title>
                    </v-list-item>
                    <br>
                    <v-list-item class='item_list' to="/estadistica">
                        <v-list-item-icon class='ico_list'>
                            <v-icon class='ico_list'>mdi-chart-bar</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Estadistica</v-list-item-title>
                    </v-list-item>
                    <br>
                    <v-list-item class='item_list' style='color:white !important' to="/comentarios">
                        <v-list-item-icon class='ico_list' style='color:white !important'>
                            <v-icon class='ico_list' style='color:white !important'>mdi-comment-search-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Comentarios y Puntuacion</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>
<script>
import router from "@/router";
export default {
    data() {
        return {

        }
    },
    methods: {
        cerrarSesion: function() {
            router.push('/login');
        }
    }

}
</script>
<style>
.navegation {
    #background-color: rgb(225, 213, 201, 0.3) !important;
    color: white !important;
}

.navbarActive {}

.appbar {

    color: black !important;
}

.item_list {
    color: white !important;
}

.ico_list {
    color: white !important;
}
</style>