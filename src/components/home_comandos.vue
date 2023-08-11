<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn style='background-color:#F2DEA0' dark v-bind="attrs" v-on="on">
                        Comandos
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar dark style="background-color: rgb(205, 151, 84, 0.9) !important">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Comandos</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text class="mt-10">
                        <v-row>
                            <v-card width="350">
                                <v-card-title style='display:flex;flex-direction:column;justify-content:center;align-items:center'>
                                    <strong class='mb-2'>Comandos</strong>
                                    Lenguaje Khipar
                                </v-card-title>
                                <v-card-text>
                                    <video src="@/assets/comandos_wuonan.mp4" width="100%" controls></video>
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<style scoped></style>
<script>
export default {
    data() {
        return {
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        };
    },
};
</script>