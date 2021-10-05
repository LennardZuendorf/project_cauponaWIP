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
      ABOUT
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
    </v-toolbar>


    <v-card
        max-width="400"
        flat
    >

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>What is Caupona?</v-list-item-title>
            <v-list-item-subtitle>
              Caupona is a webapp created by Lennard Zündorf, Gökalp Yilmiz and Samuel Gehring.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>What is Caupona for?</v-list-item-title>
            <v-list-item-subtitle>
              You can check on nearest student cantines an check the current menu easily.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Why did we create Caupona?</v-list-item-title>
            <v-list-item-subtitle>
              It's been created as part of HTW Berlins' course called "programming of mobile applications".
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Why choose Caupona as a name?</v-list-item-title>
            <v-list-item-subtitle>
              Caupona means "Mensa" in latin. It really is that simple!
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-row>

    </v-card>
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