<template>
    <v-app>
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container style="padding:0 !important;margin:0 !important" fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
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