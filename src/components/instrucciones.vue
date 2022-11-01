<template>
  <div style="overflow:hidden">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="purple lighten-2" fill-dot right>
        <v-card min-width="70%" max-width="100%">
          <v-card-title class="purple lighten-2">
            <v-icon dark size="30" class="mr-4">
              mdi-head-question-outline
            </v-icon>
            <h5 class="white--text font-weight-light">QUE ES KHIPAR - APP</h5>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-icon size="64"> mdi-calendar-text </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="amber lighten-1" fill-dot left small>
        <v-card min-width="70%" max-width="100%">
          <v-card-title class="amber lighten-1 justify-end">
            <h5 class="mr-4 white--text font-weight-light">
              ¿COMO USAR LA APP?
            </h5>
            <v-icon dark size="30">mdi-lightbulb-question</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="8">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit.
              </v-col>
              <v-col cols="12" md="4">
                Lorem ipsum dolor sit amet, no nam oblique veritus.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="cyan lighten-1" fill-dot right>
        <v-card min-width="70%" max-width="100%">
          <v-card-title class="cyan lighten-1">
            <v-icon class="mr-4" dark size="20"> mdi-flag-checkered</v-icon>

            <h6 class="white--text font-weight-light">
              ¿CUAL ES LA FINALIDAD DE LA APP?
            </h6>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" md="4">
                Lorem ipsum dolor sit amet, no nam oblique veritus no nam
                oblique.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="red lighten-1" fill-dot left small>
        <v-card min-width="70%" max-width="100%">
          <v-card-title class="red lighten-1 justify-end">
            <h4 class="mr-4 white--text font-weight-light">
              LA CULTURA WOUNAAN
            </h4>
            <v-icon dark size="30"> mdi-sprout-outline</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col class="hidden-sm-and-down" md="2">
                <v-icon size="64"> mdi-server-network </v-icon>
              </v-col>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<style></style>
<script>
export default {
  name: "instrucciones_bienvenida",
};
</script>
