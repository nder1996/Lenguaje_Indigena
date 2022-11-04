<template>
  <div class="marco_principal mt-5" fluid>
    <v-container class="mt-5" fluid>
      <v-row align="center" justify="center">
        <v-col class="column"  cols="8" sm="3" md="3">
          <v-card class="mx-auto card_categoria">
            <v-img
              height="150"
              src="https://i.pinimg.com/originals/4b/32/e2/4b32e29bce01a40249c817bd93706246.jpg"
            ></v-img>
            <v-card-title>Simbolos</v-card-title>
            <v-card-subtitle style="margin-top: 0.1px"
              >Traduccion al español</v-card-subtitle
            >
            <v-card-text class="mt-2" align="center">
              <v-chip>
                <home_simbolos />
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="column"  cols="8" sm="3" md="3">
          <v-card class="mx-auto card_categoria">
            <v-img
              height="150"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDLD51-S7EO0JcJoQxZxXKyWyBcIhSAtFmZvVZIqj78Gm6Z52mKyj1NCN9Mfy1v4g-A&usqp=CAU"
            ></v-img>
            <v-card-title>Vocales</v-card-title>
            <v-card-subtitle style="margin-top: 0.1px"
              >Traduccion al español</v-card-subtitle
            >
            <v-card-text class="mt-2" align="center">
              <v-chip>
                <home_vocales />
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="column"  cols="8" sm="3" md="3">
          <v-card class="mx-auto card_categoria">
            <v-img
              height="150"
              src="https://www.cric-colombia.org/portal/wp-content/uploads/2017/09/colores-indigenas.jpg"
            ></v-img>
            <v-card-title>Colores</v-card-title>
            <v-card-subtitle style="margin-top: 0.1px"
              >Traduccion al español</v-card-subtitle
            >
            <v-card-text class="mt-2" align="center">
              <v-chip>
                <home_colores />
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="column" cols="8" sm="3" md="3">
          <v-card class="mx-auto card_categoria">
            <v-img
              height="150"
              src="https://sobrehistoria.com//wp-content/uploads/2012/09/numeros-arabes-480x159.jpg"
            ></v-img>
            <v-card-title>Numeros</v-card-title>
            <v-card-subtitle style="margin-top: 0.1px"
              >Traduccion al español</v-card-subtitle
            >
            <v-card-text class="mt-2" align="center">
              <v-chip>
                <home_numeros />
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="column" cols="8" sm="3" md="3">
          <v-card class="mx-auto card_categoria">
            <v-img
              height="150"
              src="http://c.files.bbci.co.uk/10073/production/_97215656_naana.jpg"
            ></v-img>
            <v-card-title>Comandos</v-card-title>
            <v-card-subtitle style="margin-top: 0.1px"
              >Traduccion al español</v-card-subtitle
            >
            <v-card-text class="mt-2" align="center">
              <v-chip>
                <home_comandos />
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="column" cols="8" sm="3" md="3">
          <v-card class="mx-auto card_categoria">
            <v-img
              height="150"
              src="https://us.123rf.com/450wm/solodkayamari/solodkayamari2104/solodkayamari210400023/169707661-ni%C3%B1os-decorativos-abc-en-estilo-dino-divertido-alfabeto-creativo-aislado-ilustraci%C3%B3n-vectorial.jpg?ver=6"
            ></v-img>
            <v-card-title>Abecedario</v-card-title>
            <v-card-subtitle style="margin-top: 0.1px"
              >Traduccion al español</v-card-subtitle
            >
            <v-card-text class="mt-2" align="center">
              <v-chip>
                <home_abecedario />
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.marco_principal {
  height: 100% !important;
}
.column {
  #border: 2px solid red !important;
  margin: 0.5rem !important;
  padding: 0.2rem !important;
}
.card_categoria {
  width:55vw !Important;
  #border:2px solid orange !important;
}
</style>
<script>
export default {
  name: "home_menu",
  components: {
    home_simbolos: () => import("../components/home_simbolos.vue"),
    home_vocales: () => import("../components/home_vocales.vue"),
    home_colores: () => import("../components/home_colores.vue"),
    home_numeros: () => import("../components/home_numeros.vue"),
    home_comandos: () => import("../components/home_comandos.vue"),
    home_abecedario: () => import("../components/home_abecedario.vue"),
  },
};
</script>
