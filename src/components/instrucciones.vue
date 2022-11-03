<!--
<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-toolbar color="teal" dark>
      <v-btn icon>
        <v-icon>mdi-robot-happy-outline</v-icon>
      </v-btn>

      <v-toolbar-title>Khipar - App</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          class="content"
          v-for="child in item.items"
          :key="child.title"
          align="start"
          justify="start"
        >
          <v-list-item-content class="mx-auto">
            <v-list-item-title
              class="text-wrap text-justify"
              v-text="child.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
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
</style>
<script>
export default {
  data: () => ({
    items: [
      {
        action: "mdi-ticket",
        items: [
          {
            title: `A expressão Lorem ipsum em design gráfico e
           editoração é um texto padrão em latim utilizado na produção
          gráfica para preencher os espaços de texto em publicações para
           testar e ajustar aspectos visuais antes de utilizar conteúdo real`,
          },
        ],
        title: "¿QUE ES KHIPAR - APP?",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [{ title: "Breakfast & brunch" }],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
      {
        action: "mdi-human-male-female-child",
        items: [{ title: "List Item" }],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "List Item" }],
        title: "Health",
      },
      {
        action: "mdi-briefcase",
        items: [{ title: "List Item" }],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [{ title: "List Item" }],
        title: "Promotions",
      },
    ],
  }),
};
</script>
