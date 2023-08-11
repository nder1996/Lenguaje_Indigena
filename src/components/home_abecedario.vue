<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn style='background-color:rgb(255, 214, 0)' dark v-bind="attrs" v-on="on">
                        Abecedario
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar dark style="background-color: rgb(205, 151, 84, 0.9) !important">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text class="mt-10">
                        <v-row>
                            <v-col cols="12" align="center" jusitfy="center">
                                <v-card width="350">
                                    <v-card-title style='display:flex;flex-direction:column;justify-content:center;align-items:center'>
                                        <strong class='mb-2'>Animales</strong>
                                        Lenguaje KHIPAAR
                                    </v-card-title>
                                    <v-card-text>
                                        <video src="@/assets/animales_wuonan.mp4" width="100%" controls></video>
                                    </v-card-text>
                                </v-card>
                            </v-col>
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
        };
    },
};
</script>