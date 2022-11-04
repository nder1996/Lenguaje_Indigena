<template>
  <v-card class="card_encuesta"  outlined shaped>
    <v-form class="formulario" v-model="valid" dark style="padding:0.5rem">
        <v-row>
          <v-col class="column" cols="12">
            <h6>¿Perteneces alguna tribu indigena?</h6>
          </v-col>
          <v-col class="column" cols="12">
            <v-chip-group active-class="green white--text">
              <v-chip class="ma-2 justify-center" color="success" outlined>
                Si
              </v-chip>
              <v-chip class="ma-2 justify-center" color="deep-orange" outlined>
                No
              </v-chip>
            </v-chip-group>
          </v-col>

          <v-col class="column" cols="12">
            <h6>¿Te gusto la aplicacion?</h6>
          </v-col>
          <v-col class="column" cols="12">
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
          <v-col class="column" cols="12">
            <h6>Calificanos</h6>
          </v-col>
          <v-col class="column" cols="12">
            <v-rating
              background-color="orange lighten-3"
              color="orange"
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-outline"
              hover
              length="5"
              value="0"
            ></v-rating>
          </v-col>
          <v-col class="column" cols="12">
            <v-textarea class="mt-3"
            width="80%"
              height="110px"
              outlined
              v-model="lastname"
              label="¿Comentanos porque?"
              required
            ></v-textarea>
          </v-col>
          <v-col class="column d-flex justify-center" cols="12">
            <v-btn rounded color="success" outlined dark small>
              Enviar Calificacion
            </v-btn>
          </v-col>
        </v-row>
    </v-form>
  </v-card>
</template>
<style scoped>
.card_encuesta {
  width:88vw !important;
  /*margin:auto ;
  width:80vw !important;
  height:100% !important;*/
}
.column{
  margin-top:0.5rem;
  padding:0 !Important;
  display:flex;
  justify-content: center;
  align-items:center;
  #border:2px solid red !important;
}

.formulario{
  padding:3rem !important;
  #border:2px solid black !important;
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
