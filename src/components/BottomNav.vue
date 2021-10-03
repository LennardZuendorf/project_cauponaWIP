<template>
  <v-bottom-navigation
      :value="value"
      color="primary"
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
  data: () => ({ value: 1 }),
  name: "BottomNav"
}

</script>

<style scoped>

</style>