<template>
  <v-bottom-navigation
      :value="value"
      color="primary"
      grow
  >
    <v-btn @click="$router.push('menu')">
      <span>MENU</span>
      <v-icon>mdi-food</v-icon>
    </v-btn>

    <v-btn @click="$router.push('/')">
      <span>HOME</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="$router.push('list')">
      <span>LIST</span>
      <v-icon>mdi-Format-List-Bulleted-Type</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({ value: 1 }),
}
</script>

<style scoped>

</style>