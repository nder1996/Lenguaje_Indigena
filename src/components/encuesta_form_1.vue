<template>
  <div class="card_encuesta">
    <v-form v-model="valid" dark>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            "
          >
            <label>¿Perteneces alguna tribu indigena?</label>
            <v-chip-group active-class="green white--text">
              <v-chip class="ma-2 justify-center" color="success" outlined>
                Si
              </v-chip>
              <v-chip class="ma-2 justify-center" color="deep-orange" outlined>
                No
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-col
            cols="12"
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            "
          >
            <label>¿Te gusto la aplicacion?</label>
            <v-chip-group active-class="green white--text">
              <v-chip class="ma-2 justify-center" color="success" outlined>
                <v-icon left> mdi-emoticon-happy-outline</v-icon>
                Si
              </v-chip>
              <v-chip class="ma-2 justify-center" color="deep-orange" outlined>
                <v-icon left> mdi-emoticon-angry </v-icon>
                No
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="12">
            <v-row align="center" jusitfy="center">
              <v-col cols="12" align="center" jusitfy="center">
                <label>Calificanos</label>
              </v-col>
              <v-col cols="12" align="center" jusitfy="center">
                <v-rating
                  background-color="orange lighten-3"
                  color="orange"
                  large
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star"
                  half-icon="mdi-star-outline"
                  hover
                  length="5"
                  size="15"
                  value="3"
                ></v-rating>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-textarea
              height="100px"
              outlined
              v-model="lastname"
              label="¿Comentanos porque?"
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" align="center" jusitfy="center">
            <v-btn rounded color="success" outlined dark small>
              Enviar Calificacion
            </v-btn></v-col
          >
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<style scoped>
.card_encuesta {
  margin: auto !important;
}
</style>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
