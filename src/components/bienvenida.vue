<template>
  <div>
    <v-row justify="center">
      <!--
      <v-btn color="primary" dark @click.stop="dialog = true">
        Open Dialog
      </v-btn>
      -->

      <v-dialog v-model="dialog" max-width="290">
        <v-card outlined shaped style="background-color: rgb(205, 151, 84) !important;" dark>
          <v-card-title class="text-h4 justify-center text--light">Bienvenido</v-card-title>
          <v-card-text class="text-justify mt-3">
            <v-img src="https://o.remove.bg/downloads/0dc052e8-c022-4978-bd38-033569808266/35-359193_couple-clipart-cowboy-pareja-de-indios-animados-removebg-preview.png" />
          </v-card-text>
          <v-card-subtitle class="text-h5" align="center">App - Khipar </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
<style></style>
