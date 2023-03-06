<template>
    <div id='app' style='border:5px solid red !Important;padding: 0 !Important;' >
        <v-app>
            <v-app-bar color="brown darken-1" class="navbar mb-2" app fluid>
                <v-app-bar elevation="0" color="brown darken-1" dense dark style="padding: 0 !important" fluid>
                    <v-app-bar-nav-icon>
                        <v-icon>mdi-chart-bubble</v-icon>
                    </v-app-bar-nav-icon>
                    <v-toolbar-title>Khipar - App</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-app-bar>
            </v-app-bar>
            <v-footer style='padding: 0 !Important;' app>
                <v-card class="d-flex flex-column-reverse" elevation="0">
                    <v-toolbar color="brown lighten-1" dark>
                        <v-tabs v-model="tabs" centered style="width:100vw !important">
                            <v-tab v-for="n in btn_home" :key="n">
                                <v-icon>{{ n }}</v-icon>
                            </v-tab>
                        </v-tabs>
                    </v-toolbar>
                    <v-tabs-items class="contenedor_tabs" v-model="tabs">
                        <v-tab-item :transition="false" style="overflow:auto !important">
                            <v-card flat elevation="0">
                                <mensaje_bienvenida />
                                <instrucciones_bienvenida />
                            </v-card>
                        </v-tab-item>
                        <v-tab-item :transition="false" style="overflow:auto !important">
                            <home_menu />
                        </v-tab-item>
                        <v-tab-item class="experiencia" :transition="false"">
    
           <mensaje_encuesta />
           <formulario_experiencia />

        </v-tab-item>
      </v-tabs-items>
    </v-card>
            </v-footer>
        </v-app>
    </div>
</template>
<style>
.contenedor_tabs {
    margin-top: 1rem;
    #height: 90vh !important;
    padding: 0rem !important;
    background-color: transparent !important;
}

.experiencia {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden !important;
    height: 100% !important;
}

.v-footer{
  padding: 0;
  margin-top: 1rem !Important;
}

    @media (max-width: 1024px) {
        #app {
          overflow-y: hidden !important;
          height: 100vh !important;
        }
      }
      @media (min-width: 1025px) {
        #app {
          display: none !important;
        }
      }
      ::-webkit-scrollbar {
          display: none !important;
        }
</style>
<script>
export default {
    components: {
      mensaje_bienvenida: ()=> import("../components/bienvenida.vue"),
        instrucciones_bienvenida: ()=> import("../components/instrucciones.vue"),
                            formulario_experiencia: () => import("../components/encuesta_form.vue"),
                            mensaje_encuesta: () => import("../components/mensaje_encuesta.vue"),
                            home_menu: () => import("../components/home_menu.vue"),
                            },
                            data() {
                            return {
                            tabs: null,
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            btn_home: ["mdi-hand-wave", "mdi-home", "mdi-book-information-variant"]
                            };
                            },
                            };
                            </script>