<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="background lighten-1 black--text text-center"
    >
      <v-card-text>
        <v-btn
            class="mx-4 black--text"
            mdi-github
            href="https://github.com/LennardZuendorf/project_caupona"
        >
          <v-icon size="24px">
            mdi-github
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        CAUPONA is a project created by Gökalp, Samuel an Lennard as part of HTW Berlin's course "programming of mobile applications".
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

</script>

<style scoped>

</style>