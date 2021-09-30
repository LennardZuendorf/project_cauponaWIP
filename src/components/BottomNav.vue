<template>
  <v-bottom-navigation
      v-model="value"
      color="light-green"
      horizontal
  >
    <v-btn>
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Food</span>

      <v-icon>mdi-food</v-icon>
    </v-btn>

    <v-btn>
      <span>Card</span>

      <v-icon>mdi-card-text</v-icon>
    </v-btn>

    <v-btn>
      <span>Profile</span>

      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav"
}
</script>

<style scoped>

</style>