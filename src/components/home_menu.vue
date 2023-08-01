<template>
    <div class="marco_principal mt-5" fluid>
        <v-container class="mt-5" fluid>
            <v-row align="center" justify="center">
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria prueba terminada" height='300px'>
                        <v-img cover height="150" src="@/assets/simbolosPresentacion.jpeg"></v-img>
                        <v-card-title>Símbolos</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip >
                                <home_simbolos />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img contain height="150" src="@/assets/vocalesPresentacion.jpeg"></v-img>
                        <v-card-title>Vocales</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_vocales />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img height="150" src="@/assets/coloresPresentacion.jpeg"></v-img>
                        <v-card-title>Colores</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_colores />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img height="150" src="@/assets/numerosPresentacion.jpeg"></v-img>
                        <v-card-title>Números</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_numeros />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img cover height="150" src="@/assets/comandosPresentacion.jpeg"></v-img>
                        <v-card-title>Comandos</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_comandos />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img contain height="150" src="@/assets/abecedarioPresentacion.jpeg"></v-img>
                        <v-card-title>Abecedario</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_abecedario />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img height="150" src="@/assets/figurasgPresentacion.jpeg"></v-img>
                        <v-card-title>Figuras Geométricas</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_figurasgeometricas />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img height="150" src="@/assets/saludosPresentacion.jpeg"></v-img>
                        <v-card-title>Saludos</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_saludos />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img height="150" src="@/assets/animalesPresentacion.jpeg"></v-img>
                        <v-card-title>Animales</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_animales />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col class="column" cols="8" sm="3" md="3">
                    <v-card class="mx-auto card_categoria" height='300px'>
                        <v-img height="150" src="@/assets/animalesPresentacion.jpeg"></v-img>
                        <v-card-title>Galería</v-card-title>
                        <v-card-text class="mt-2" align="center">
                            <v-chip>
                                <home_galeria />
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
.marco_principal {
    height: 84vh !important;
    overflow: scroll !important;
}

.column {
    #border: 2px solid red !important;
    margin: 0.5rem !important;
    padding: 0.2rem !important;
}

.card_categoria {
    width: 55vw !Important;
    #border: 2px solid orange !important;
}
</style>
<script>
export default {
    name: "home_menu",
    components: {
        home_simbolos: () => import("../components/home_simbolos.vue"),
        home_vocales: () => import("../components/home_vocales.vue"),
        home_colores: () => import("../components/home_colores.vue"),
        home_numeros: () => import("../components/home_numeros.vue"),
        home_comandos: () => import("../components/home_comandos.vue"),
        home_abecedario: () => import("../components/home_abecedario.vue"),
        home_figurasgeometricas: () => import("../components/home_figurasgeometricas.vue"),
        home_saludos: () => import("../components/home_saludos.vue"),
        home_animales: () => import("../components/home_animales.vue"),
        home_galeria: () => import("../components/home_galeria.vue"),
    },
};
</script>