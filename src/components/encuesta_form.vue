<template>
  <div class="card_encuesta" style="height: 84vh">
    <v-form class="formulario" dark v-on:submit.prevent="addOpinion">
      <v-card outlined shaped style="padding: 2rem">
        <v-row>
          <v-col class="column" cols="12">
            <div style="display:flex;justify-content:center;align-items:center;flex-direction: column;">
              <h4 class="mb-5">¿Te gustó la aplicación?</h4>
              <div class="display:flex;justify-content:center;align-items:center;flex-direction: row;">
                <v-chip class="ma-2 justify-center" color="success" outlined @click="gustoSiNo = 'SI'">
                  <v-icon left>mdi-emoticon-happy-outline</v-icon>
                  Si
                </v-chip>
                <v-chip class="ma-2 justify-center" color="deep-orange" outlined @click="gustoSiNo = 'NO'">
                  <v-icon left>mdi-emoticon-angry</v-icon>
                  No
                </v-chip>
              </div>
            </div>
          </v-col>
          <v-col class="column" cols="12">
            <h4>Califícanos</h4>
          </v-col>
          <v-col class="column" cols="12">
            <v-rating v-model="rating" background-color="orange lighten-3" color="orange" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-outline" hover length="5" value="0"></v-rating>
          </v-col>
          <v-col class="column" cols="12">
            <v-textarea class="mt-3" height="150px" outlined v-model="comentarios" label="¿Coméntanos por qué?" required></v-textarea>
          </v-col>
          <v-col class="column d-flex justify-center" cols="12">
            <v-btn type="submit" rounded color="success" outlined dark small>
              Enviar Calificación
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>
<style scoped>
.card_encuesta {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw !important;
    height: 100vh;
}

.column {
    margin-top: 1rem;
    padding: 0 !Important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formulario {
    padding: 2rem !important;
    #border: 2px solid black !important;
}
</style>
<script>
import { fireApp } from '/src/dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';

export default {
  name: 'encuestaForm',
  props: ['username'],
  data() {
    return {
      gustoSiNo: '',
      rating: 0, // El valor inicial de rating debe ser 0, ya que es una calificación de 0 a 5.
      comentarios: '',
    }
  },
  methods: {
    addOpinion: function() {
      console.log("es INDIGENA : " + this.gustoSiNo);
      console.log("es RATING : " + this.rating);
      console.log("es COMENTARIOS : " + this.comentarios);
      console.log("es Username : " + localStorage.getItem('UserActual'));
      const db = firebase.database();
      const recordRef = db.ref(`DATOS_ENCUESTA/${localStorage.getItem('UserActual')}`);
      recordRef.update({
        gustoSiNo: this.gustoSiNo,
        puntaje: this.rating,
        comentarios: this.comentarios
      });
    }
  }
}
</script>