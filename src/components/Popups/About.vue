<template>
  <v-row justify="space-around">
    <v-col cols="auto">

      <v-dialog
          transition="dialog-top-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
          >ABOUT</v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="primary"
                dark
            >ABOUT CAUPONA</v-toolbar>
            <v-card-text>
              <v-row>

              </v-row>

            </v-card-text>

            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >close</v-btn>
            </v-card-actions>
          </v-card>

        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>