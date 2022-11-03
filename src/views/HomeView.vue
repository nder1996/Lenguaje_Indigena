<template>
  <div>
    <v-app>
      <!-- -->
      <v-app-bar class="item-1" style="margin:0 !important;padding:0 !important;border:2px solid blue !important" app fluid>
        <div class="item-2" style="margin:0 !important;padding:0 !important;width:100% !important;border:2px solid red !important"  fluid>
          <v-app-bar class="item-3" color="deep-purple accent-4" style="margin:0 !important;padding:0 !important;" dense dark fluid >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </div>
      </v-app-bar>

      <!-- -->

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
          <v-tabs-items
            class="pa-1 control_scroll"
            v-model="tabs"
            elevation="0"
          >
            <v-tab-item
              class="tabs_contenido"
              style="overflow: scroll; width: 100vw !important"
            >
              <v-card flat>
                <mensaje_bienvenida />
                <instrucciones_bienvenida />
              </v-card>
            </v-tab-item>
            <v-tab-item
              class="tabs_contenido"
              style="overflow: scroll !important"
            >
              <v-card flat>
                <home_menu />
              </v-card>
            </v-tab-item>
            <v-tab-item
              class="tabs_contenido item_form"
              style="overflow: scroll !important"
            >
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
header{
  border:2px solid black !Important;
  width:100% !important;
  margin:0 !important;
  padding:0 !important;
}


.item_form {
  display: flex;
  justify-content: center;
  align-items: center;
  #border: 2px solid orange !important;
}

.tabs_contenido {
  background-color: rgb(244, 248, 237, 0.5) !important;
  height: 90vh !important;
}

.control_scroll {
  /*background-color: transparenty !important;*/
}
/*
@media (max-width: 375px) {
  .control_scroll {
    height: 91.5vh !important;
  }
}
@media (min-width: 376px) and (max-width: 414px) {
  .control_scroll {
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
*/
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
