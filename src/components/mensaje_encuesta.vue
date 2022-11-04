<template>
  <div>
       <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="312"
    >
      <v-card outlined shaped style="background-color: rgb(205, 151, 84,0.9) !important;" dark>
     
       <v-card-title class="text-h6 text-center">
           Para nosotros es importante saber tu opinion
        </v-card-title>    
                 <v-card-text class="text-justify mt-3">
            <v-img src="https://i.postimg.cc/Ls9B4g4P/pngtree-hand-drawn-cartoon-aboriginal-characters-png-image-2339440-removebg-preview.png" />
          </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>
<style scoped></style>
<script>
 export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>
