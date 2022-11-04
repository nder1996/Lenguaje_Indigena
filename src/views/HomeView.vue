<template>
  <div>
    <v-card class="d-flex flex-column-reverse" elevation="0">
      <v-toolbar color="brown lighten-1" dark>
          <v-tabs v-model="tabs" centered style="width:100vw !important">
            <v-tab v-for="n in btn_home" :key="n"><v-icon>{{ n }}</v-icon></v-tab>
          </v-tabs>
      </v-toolbar>

      <v-tabs-items class="contenedor_tabs" v-model="tabs">
        <v-tab-item :transition="false" style="overflow:auto !important">
          
         
          <v-card flat elevation="0">
          <mensaje_bienvenida/>
          <instrucciones_bienvenida />
          </v-card>
        
        </v-tab-item>
        <v-tab-item :transition="false" style="overflow:auto !important">
          <v-card flat>
            <v-card-title class="text-h5"> An awesome title </v-card-title>
            <v-card-text>
              <p>
                Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
                rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis,
                ligula mi congue nunc, vitae euismod ligula urna in dolor.
                Praesent congue erat at massa.
              </p>

              <p>
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
                egestas, neque sit amet convallis pulvinar, justo nulla eleifend
                augue, ac auctor orci leo non est. Etiam sit amet orci eget eros
                faucibus tincidunt. Donec sodales sagittis magna.
              </p>

              <p class="mb-0">
                Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque
                suscipit. Fusce pharetra convallis urna.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item class="experiencia" :transition="false"">
          <v-card>
            <h1>ola mundo</h1>
          </v-card>
          <!--     <mensaje_encuesta />
          <v-card color="grey lighten-3">
             <formulario_experiencia />
          </v-card>-->
     
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
<style>
.contenedor_tabs{
  margin-top:1rem ;
  height:85vh !important;
  padding:0rem !important;
  #border:2px solid red !important;
  background-color:transparent !important;
}
.experiencia{
  /*width:100vw;
  overflow:hidden !important;
  padding:0 !important;
  border:2px solid red !Important;*/
}
</style>
<script>
export default {
  components:{
    mensaje_bienvenida: () => import("../components/bienvenida.vue"),
    instrucciones_bienvenida: () => import("../components/instrucciones.vue"),
    formulario_experiencia: () => import("../components/encuesta_form.vue"),
    mensaje_encuesta: () => import("../components/mensaje_encuesta.vue"),
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
