<template>
    <v-container class="mt-10" style='height:84vh !important'>
        <v-row justify="center">
            <v-card class="card_instrucciones">
                <v-img style='object-fit:contain;' height="250px" src="@/assets/presentacion.jpeg">
                    <v-card-title class="white--text mt-8" style='display:flex;justify-content:flex-start;align-items:center;flex-dirrection:row'>
                        <v-avatar size="56" contain>
                            <img contain alt="user" src="@/assets/avatarPresentacion.jpeg" />
                        </v-avatar>
                        <h6 style='color:white !important;width:30% !important;background-color:rgb(109, 76, 65,0.7) !important' class="ml-3">WOUNAAN</h6>
                    </v-card-title>
                </v-img>
                <v-card-text>
                    <div class="font-weight-bold ml-8 mb-2">App</div>
                    <v-timeline align-top dense>
                        <v-timeline-item v-for="message in messages" :key="message.time" :color="message.color" small>
                            <div>
                                <div class="font-weight-normal">
                                    <strong>{{ message.from }}</strong> 
                                </div>
                                <div class="text-justify mt-3">{{ message.message }}</div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
<style scoped>
.marco_instrucciones {
    overflow: hidden;
    padding: 1rem !important;
    background-color: rgb(244, 248, 237, 0.5) !important;
}

.content {
    margin: 0 !important;
    padding: 1rem !important;
}

.card_instrucciones {
    width: 90vw !important;
}
</style>
<script>
export default {
    data: () => ({
        messages: [{
                from: "¿Qué Es KHIPAAR?",
                message: `Khipar es una app móvil, que permite  establecer una interacción con la cultura wounaan.`,
                color: "yellow accent-4",
            },
            {
                from: "¿Como usar la App?",
                message: `descarga la aplicacion , registrate y disfruta de la cultura wounan`,
                color: "red darken-1",
            },
            {
                from: "¿Cuál es el objetivo de la App?",
                message: `El objetivo  de la app es preservar la lengua nativa woun meu,mediante la presentación  y práctica de vocablos.`,
                color: "green darken-1",
            },
            {
                from: "La Cultura Wounaan",
                message: `Es un pueblo indígena originario del departamento del choco y del valle del cauca.`,
                color: "purple darken-4",
            },
            {
                from: "Colaboradores",
                message: `Andersons Arevalo(desarrollador de software), Isis Buelvas (asesora tesis), Ana Castiblanco,Natali Fuentes y Nelson Jiménez (investigadores), Nolberta Málaga y Jhon Fredy valencia (agentes interculturales Wounaan)`,
                color: "blue-grey darken-4",
            },
        ],
    }),
};
</script>