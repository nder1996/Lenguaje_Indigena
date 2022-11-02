<template>
  <div>
    <v-app>
      <v-footer
        app
        style="
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
        "
        fluid
      >
        <!-- -->
        <v-card style="display: flex; flex-direction: column-reverse" fluid>
          <v-toolbar
            dark
            color="black"
            style="
              background-color: rgb(205, 151, 84, 0.8) !important;
              border: none !important;
            "
          >
            <template>
              <v-tabs v-model="tabs" centered>
                <v-tab v-for="n in btn_home" :key="n">
                  <v-icon>{{ n }}</v-icon>
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items class="pa-1 control_scroll" v-model="tabs" elevation="0">
            <v-tab-item style="overflow: scroll;width:100vw !important;">
              <v-card flat>
                <v-card-text>
                  <mensaje_bienvenida />
                  <instrucciones_bienvenida />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item style="overflow: scroll !important">
              <v-card flat>
                <home_menu />
              </v-card>
            </v-tab-item>
            <v-tab-item style="overflow: scroll !important">
              <v-card flat>
                <v-card-text>
                   <mensaje_encuesta />
                      <encuesta_1 />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>
<style scoped>
.control_scroll {
  background-color: transparent !important;
}
@media (max-width: 375px) {
  .control_scroll {
    height: 91.5vh !important;
  }
}
@media (min-width: 376px) and (max-width: 414px) {
  .control_scroll {
    /* border:2px solid red !important;*/
    height: 85vh !important;
  }
}

@media (min-width: 415px) and (max-width: 540px) {
  .control_scroll {
    height: 83.4vh !important;
  }
}

@media (min-width: 541px) and (max-width: 640px) {
  .control_scroll {
    height: 83.4vh !important;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .control_scroll {
    height: 91.4vh !important;
  }
}

@media (min-width: 768px) and (max-width: 960px) {
  .control_scroll {
    height: 91.4vh !important;
  }
}

@media (min-width: 960px) and (max-width: 1100px) {
  .control_scroll {
    height: 91.4vh !important;
  }
}

@media (min-width: 1100px) and (max-width: 10240px) {
  .control_scroll {
    height: 91.4vh !important;
  }
}

</style>
<script>
/*
import vocales from '../components/Vocales.vue'
*/
export default {
  name: "Nabvar",
  components: {
    mensaje_bienvenida: () => import("../components/bienvenida.vue"),
    instrucciones_bienvenida: () => import("../components/instrucciones.vue"),
    home_menu: () => import("../components/home_menu.vue"),
    encuesta_1: () => import("../components/encuesta_form_1.vue"),
    mensaje_encuesta: () => import("../components/mensaje_encuesta.vue"),
    encuesta_3: () => import("../components/encuesta_form_1.vue"),
    /*vocales*/
  },
  data() {
    return {
      tabs: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      btn_home: ["mdi-hand-wave", "mdi-home", "mdi-book-information-variant"],
    };
  },
};
</script>
