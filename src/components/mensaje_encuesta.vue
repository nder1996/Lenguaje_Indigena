<template>
  <div>
       <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="100%"
    >
      <v-card outlined shaped style="background-color: rgb(205, 151, 84) !important;" dark>
       <v-card-title class="text-h6 text-center">
       Para nosotros es importante saber tu opinión
        </v-card-title> 

        <!--
          
                 <v-card-text class="text-justify mt-3">
            <v-img src="@/assets/presentacion_img.jpeg" />
          </v-card-text>
        -->
        
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
