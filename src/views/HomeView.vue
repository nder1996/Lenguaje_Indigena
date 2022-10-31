<template>
  <div>
    <v-app>
      <v-footer app style="padding: 0 !important; margin: 0 !important;width:100% !important;border:2px solid blue" fluid>
        <!-- -->
        <v-card style="display: flex; flex-direction: column-reverse" fluid>
          <v-toolbar dark color="black">
            <template>
              <v-tabs v-model="tabs" centered>
                <v-tab v-for="n in btn_home" :key="n">
                  <v-icon>{{ n }}</v-icon>
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tabs" style="height: 90vh;">
            <v-tab-item style="overflow: scroll;">
              <v-card flat>
                <v-card-text>
                    <mensaje_bienvenida />
                    <instrucciones_bienvenida />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item style="border:2px solid pink !important;overflow: scroll !important;">
              <v-card flat>
                <home_menu />
              </v-card>
            </v-tab-item>
            <v-tab-item >
              <v-card flat>
                <v-card-title class="text-h5">
                  An even better title
                </v-card-title>
                <v-card-text>
                  <p>
                    Maecenas ullamcorper, dui et placerat feugiat, eros pede
                    varius nisi, condimentum viverra felis nunc et lorem. Sed
                    hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris
                    at ligula. Proin faucibus arcu quis ante.
                  </p>

                  <p class="mb-0">
                    Etiam vitae tortor. Curabitur ullamcorper ultricies nisi.
                    Sed magna purus, fermentum eu, tincidunt eu, varius ut,
                    felis. Aliquam lobortis. Suspendisse potenti.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>
<style scoped></style>
<script>
/*
import vocales from '../components/Vocales.vue'
*/
export default {
  name: "Nabvar",
  components: {
       mensaje_bienvenida: () => import("../components/bienvenida.vue"),
       instrucciones_bienvenida: () => import("../components/instrucciones.vue"),
       home_menu: () => import("../components/home_menu.vue")
    /*vocales*/
  },
  data() {
    return {
      tabs: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      btn_home: ["mdi-hand-wave", "mdi-home", "mdi-chart-box"],
    };
  },
};
</script>
