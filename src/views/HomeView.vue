<template>
    <v-card fluid>
        <v-toolbar color="brown lighten-1" dark>
            <template>
                <v-tabs v-model="tabs" centered>
                    <v-tab>
                        Iniciar Sesion
                    </v-tab>
                    <v-tab>
                        Registrar
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
        <v-tabs-items v-model="tabs" style="border:none !Important;box-shadow:none !important" elevation="0">
            <v-tab-item style="border:none !Important;box-shadow:none !important" elevation="0">
                <inicio />
            </v-tab-item>
            <v-tab-item  style="border:none !Important;box-shadow:none !important" elevation="0">
                <registro />
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>
<script>
import inicio from '../components/InicioUser.vue';
import registro from '../components/RegistroUser.vue';

export default {
    components: {
        inicio,
        registro,
    },
    data() {
        return {
            tabs: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
}
</script>
<style scoped>
</style>