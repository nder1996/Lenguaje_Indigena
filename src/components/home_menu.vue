<template>
  <div class="marco_principal" fluid>
    <v-container fluid>
      <v-row>
        <v-col
          class="column mx-auto"
          v-for="i in 1"
          :key="i"
          cols="6"
          sm="6"
          md="4"
        >
          <v-card class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>
                  <home_simbolos />
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="column mx-auto"
          v-for="i in 1"
          :key="i"
          cols="5"
          sm="6"
          md="4"
        >
          <section>
            <home_vocales />
          </section>
        </v-col>
        <v-col
          class="column mx-auto"
          v-for="i in 1"
          :key="i"
          cols="5"
          sm="6"
          md="4"
        >
          <section>
            <home_colores />
          </section>
        </v-col>
        <v-col
          class="column mx-auto"
          v-for="i in 1"
          :key="i"
          cols="5"
          sm="6"
          md="4"
        >
          <section>
            <home_numeros />
          </section>
        </v-col>
        <v-col
          class="column mx-auto"
          v-for="i in 1"
          :key="i"
          cols="5"
          sm="6"
          md="4"
        >
          <section>
            <home_comandos />
          </section>
        </v-col>
        <v-col
          class="column mx-auto"
          v-for="i in 1"
          :key="i"
          cols="5"
          sm="6"
          md="4"
        >
          <section>
            <home_abecedario />
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.marco_principal {
  height: 100% !important;
  border: 2px solid red !important;
}
.column {
  margin-top: 1rem !important;
  border: 2px solid orange !important;
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
