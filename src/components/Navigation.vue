<template>
  <v-bottom-navigation
      :value="value"
      color="primary"
      fixed-bottom
  >
    <v-btn>
      <span>FOOD</span>

      <v-icon>mdi-food</v-icon>
    </v-btn>

    <v-btn>
      <span>HOME</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>MAP</span>

      <v-icon>mdi-map</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({ value: 1 })
}
</script>

<style scoped>

</style>