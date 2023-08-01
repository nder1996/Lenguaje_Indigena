<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn style='background-color:#26160C' dark v-bind="attrs" v-on="on">
                        Galería
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar dark style="background-color: rgb(205, 151, 84, 0.9) !important">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Galería</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text class="mt-10">
                        <v-row>
                            <v-col v-for="i in 15" :key="i" cols="12" sm="4" md="4" align="center" jusitfy="center">
                                <v-img :src="require(`@/assets/galeria_${i}.jpeg`)" style='height:300px;width:"450px'>
                                    
                                </v-img>
                               <!--
                                <v-card elevation="2" width="450px" height='300px'>
                                    <v-img style='width:100% !important' :src="require(`@/assets/galeria_${i}.jpeg`)"></v-img>
                                    <v-card-subtitle class="text-start">Galeria Wuonan</v-card-subtitle>
                                </v-card>
                            -->
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
            notifications: false,
            sound: true,
            widgets: false,
        };
    },
};
</script>