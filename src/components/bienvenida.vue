<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" max-width="450">
                <v-card dark outlined shaped style="background-color: rgb(200, 151, 91) !important;">
                    <v-card-title class="text-h4 justify-center text--light"> <strong class='mb-2'>THUMAM KHUUR</strong> <p>¡Bienvenidos!</p>  </v-card-title>
                    <v-card-text class="text-justify mt-3">
                        <v-img class='img-bienvenida' src="@/assets/presentacion_img.jpeg" style='object-fit:cover' />
                    </v-card-text>
                    <v-card-subtitle class="text-h5" align="center">
                        <strong class='mb-2' style='font-size:1.7rem'>khaubat maar phobor</strong>
                        <p style='font-size:1.3rem'>
                           Interactúa con la cultura wounaan  
                        </p>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<style type="text/css">
.img-bienvenida {
    width: 100%;
    object-fit: cover !important;
}
</style>
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