<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-row align="center" justify="center">
              <v-col cols="12" align="center" justify="center">
                <label>¿Te gusto la aplicacion?</label></v-col
              >
              <v-col cols="12" align="center" justify="center"  style="display:flex;justify-content:center;">
                <v-chip-group active-class="green white--text"
                >
                  <v-chip class="ma-2 justify-center" color="success" outlined>
                    <v-icon left> mdi-emoticon-happy-outline</v-icon>
                    Si
                  </v-chip>
                  <v-chip class="ma-2 justify-center" color="deep-orange" outlined>
                    <v-icon left> mdi-emoticon-angry </v-icon>
                    No
                  </v-chip>
                </v-chip-group></v-col
              >
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-row align="center" jusitfy="center">
              <v-col cols="12" align="center" jusitfy="center">
                <label>Calificanos</label>
              </v-col>
              <v-col cols="12" align="center" jusitfy="center">
                <v-rating
                  background-color="orange lighten-3"
                  color="orange"
                  large
                  empty-icon="mdi-star"
                  full-icon="mdi-star"
                  half-icon="mdi-star"
                  hover
                  length="5"
                  size="24"
                  value="3"
                ></v-rating>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-textarea
              filled
              v-model="lastname"
              label="¿Comentanos porque?"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row align="center" jusitfy="center">
          <v-col cols="12" align="center" jusitfy="center">
            <v-btn rounded color="success" outlined dark> Enviar Calificanos </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<style scoped></style>
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
