<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
            Vocales
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark style="background-color: rgb(205, 151, 84, 0.9) !important">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Vocales</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>
  <v-card-text class="mt-10">
            <v-row>
              <v-col
                v-for="i in 5"
                :key="i"
                cols="12"
                sm="4"
                md="4"
                align="center"
                jusitfy="center"
              >
                <v-card elevation="2" width="300">
                  <v-img
                    height="150"
                    src="https://3.bp.blogspot.com/-MS7-V-MrbQA/V4B0E7R9BFI/AAAAAAAAADI/YVJqWYaS2GAbAyVOuJpqEqHrdT3mGRAswCLcB/s1600/clans.jpg"
                  ></v-img>
                  <v-card-title>Vocales idioma indigena</v-card-title>
                  <v-card-subtitle class="text-start"
                    >Vocales idioma español</v-card-subtitle
                  >
                  <audio
                    class="mt-3 mb-3"
                    src="https://www.sepi.cdmx.gob.mx/storage/app/media/audios%20lengua%20indigena/mazateco.mp3"
                    controls
                    style="width: 90%"
                  ></audio>
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
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
};
</script>
