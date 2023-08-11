<template>
  <div class="card_encuesta" style="height: 84vh;width: 100% !important;padding: 0 !important;">
    <v-form class="formulario" dark v-on:submit.prevent="addOpinion">
      <v-card outlined shaped style="padding: 2rem">
        <v-row>
          <v-col class="column" cols="12">
            <v-alert v-if="formInactive==true"
  border="left"
  color="orange"
  elevation="15"
  type="warning">
  No puedes ingresar nuevamente la encuesta porque ya enviaste la encuesta
</v-alert>
          </v-col>
          <v-col class="column" cols="12">
            <div style="display:flex;justify-content:center;align-items:center;flex-direction: column;">
              <h4 class="mb-5">¿Te gustó la aplicación?</h4>
              <div class="display:flex;justify-content:center;align-items:center;flex-direction: row;">
                <v-chip class="ma-2 justify-center" color="success" outlined @click="gustoSiNo = 'SI'" required :disabled="formInactive">
                  <v-icon left>mdi-emoticon-happy-outline</v-icon>
                  Si
                </v-chip>
                <v-chip class="ma-2 justify-center" color="deep-orange" outlined @click="gustoSiNo = 'NO'" required :disabled="formInactive">
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
            <v-rating v-bind:class=" { 'ratingInactive': ratingInactive }" v-model="rating" background-color="orange lighten-3" color="orange" empty-icon="mdi-star-outline"
              full-icon="mdi-star" half-icon="mdi-star-outline" hover length="5" value="0" required></v-rating>
          </v-col>
          <v-col class="column" cols="12">
            <v-textarea class="mt-3" height="150px" outlined v-model="comentarios" label="¿Coméntanos por qué?"
              required  :disabled='formInactive'   
              ></v-textarea>
          </v-col>
          <v-col id="sendCalificacion" class="column d-flex justify-center" cols="12" >
            <v-btn :disabled="formInactive" type="submit" rounded  outlined  small v-bind:class=" { 'btnDisabled': formInactive }">
              Enviar Calificación
            </v-btn>
          </v-col>
          
        
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>
<style scoped>
.inactiveform{
  background-color: rgba(0, 0, 0, 0.1); /* Fondo semitransparente */
  pointer-events: none !important; /* Evitar interacción con el campo */
  color: white !important; 
}

.ratingInactive{
  opacity: 0.4 !important; /* Cambia la opacidad para simular deshabilitación */
  pointer-events: none !important;  /* Evita la interacción con los íconos */

}

.btnDisabled{
  background-color: rgba(0, 0, 0, 0.1); /* Fondo semitransparente */
  color: white; /* Cambia el color de texto */
  opacity: 0.7; /* Cambia la opacidad para indicar deshabilitación */
  cursor: not-allowed; /* Cambia el cursor para indicar que no es interactivo */
}

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
}
</style>
<script>

import firebase from "firebase/app";
//import 'firebase/database';
//import { db } from '@/firebase'; // Asegúrate de importar la configuración de Firebase

export default {
  name: 'encuestaForm',
  props: ['username'],
  data() {
    return {
      gustoSiNo: '',
      rating: 0, // El valor inicial de rating debe ser 0, ya que es una calificación de 0 a 5.
      comentarios: '',
      formInactive: false,
      ratingInactive:false
    }
  },
  methods: {
    addOpinion: function () {
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
      window.location.reload();
    },async verificarFormulario() {
    const userActual = localStorage.getItem('UserActual');
    const db = firebase.database();
    const recordRef = db.ref(`DATOS_ENCUESTA/${userActual}`);
    
    try {
      const snapshot = await recordRef.once('value');
      const data = snapshot.val();
      if (data) {
        const gustoSiNo = data.gustoSiNo;
        const rating = data.puntaje;
        const comentarios = data.comentarios;
        if (gustoSiNo !== "null" && rating !== "null" && comentarios !== "null") {
          this.formInactive = true;
          this.ratingInactive = true;
          console.log('this.formInactive : ' + this.formInactive);
          console.log('this.ratingInactive : ' + this.ratingInactive);
        } else {
          console.log('NO EXISTE LOS DATOS DE LA ENCUESTA');
          this.formInactive = false;
          this.ratingInactive = false;
          console.log('this.formInactive : ' + this.formInactive);
          console.log('this.ratingInactive : ' + this.ratingInactive);
        }
      } else {
        console.log('No se encontraron datos para el usuario:', userActual);
      }
    } catch (error) {
      console.error('Error al buscar los datos:', error);
    }
  }
  },
  created() {
    this.verificarFormulario();// Llamada a la propiedad computada
  }
};
</script>
