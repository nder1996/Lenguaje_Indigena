<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290" >
        <v-card dark outlined shaped style="background-color: rgb(205, 151, 84,0.9) !important;">
          <v-card-title class="text-h4 justify-center text--light">Bienvenido</v-card-title>
          <v-card-text class="text-justify mt-3">
            <v-img src="https://i.postimg.cc/KvBNdkSv/35-359193-couple-clipart-cowboy-pareja-de-indios-animados-removebg-preview-1.png" />
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
