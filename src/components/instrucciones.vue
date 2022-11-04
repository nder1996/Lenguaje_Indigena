<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-card class="card_instrucciones">
        <v-img
          height="130px"
          src="https://hacemosmemoria.org/wp-content/uploads/2020/03/Indigenas-02-998x680.jpg"
        >
          <v-card-title class="white--text mt-8">
            <v-avatar size="56" contain>
              <img
                contain
                alt="user"
                src="https://img.freepik.com/vector-premium/muneca-maria-tradicional-mexicana_285069-271.jpg"
              />
            </v-avatar>
            <p class="ml-3">WOUNAAN</p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Today</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
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
    messages: [
      {
        from: "¿Que Es Khipar - App?",
        message: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.`,
        time: "9:47am",
        color: "yellow accent-4",
      },
      {
        from: "¿Como Usar La App?",
        message: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.`,
        time: "10:42am",
        color: "red darken-1",
      },
      {
        from: "¿Cual Es El Objetivo De La App?",
        message: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.`,
        time: "10:37am",
        color: "green darken-1",
      },
      {
        from: "La Cultura Wounaan",
        message: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.`,
        time: "9:47am",
        color: "purple darken-4",
      },
    ],
  }),
};
</script>
