<template>
  <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
  >
  <template v-slot:activator="{ on, attrs }">
    <v-btn
        color="white"
        dark
        v-bind="attrs"
        v-on="on"
        text
        block
        large
    >
      SETTINGS
    </v-btn>
  </template>
  <v-card>
    <v-toolbar
        dark
        color="primary"
    >
      <v-btn
          icon
          dark
          @click="dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>ABOUT</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
            dark
            text
            @click="dialog = false"
        >
          SETTINGS
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  }
}

</script>

<style scoped>

</style>