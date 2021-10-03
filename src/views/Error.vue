<template>
  <v-app>
    <v-main>
      <v-container>

        <v-row
            align="center"
            justify="space-around"
        >
          <v-col>
            <v-img :src="require('@/assets/icon_cap.svg')"></v-img>
          </v-col>

        </v-row>

        <v-row
            align="center"
            justify="space-around"
        >
          <v-text-field>
            An error has occured. We’re sorry for the inconvience!
          </v-text-field>
        </v-row>

        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn
              depressed
              elevation="2"
              color="primary"
          >
            RETURN
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "Error"
}
</script>

<style scoped>

</style>