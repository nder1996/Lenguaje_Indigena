<template>
    <v-app>
        <!--
        <v-app-bar color="brown darken-1" class="navbar mb-2" app fluid>
            <v-app-bar elevation="0" color="brown darken-1" dense dark style="padding: 0 !important" fluid>
                <v-app-bar-nav-icon>
                    <v-icon>mdi-chart-bubble</v-icon>
                </v-app-bar-nav-icon>
                <v-toolbar-title>Khipar - App</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-app-bar>
        </v-app-bar>
    -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container style="padding:0 !important;margin:0 !important" fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
        <!--
        <v-footer app fluid style="padding: 0 !important;" elevation="3">
            <router-view />
        </v-footer>
    -->
    </v-app>
</template>
<style scoped>
.v-toolbar__content {
    height: 100% !important;
    margin: 0 !important;
    padding: 0rem !important;
}

.navbar .v-sheet {
    height: 56px !important;
    margin: 0 !important;
    padding: 0rem !important;
}
</style>
<script>
//import firebase from './firebase';
export default {
    name: "App",

};
</script>