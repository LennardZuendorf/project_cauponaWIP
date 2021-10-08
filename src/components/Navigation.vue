<template>
  <v-bottom-navigation
      :value="value"
      color="primary"
      grow
      fixed
  >
    <v-btn @click="$router.push('menu')">
      <span>MENUS</span>
      <v-icon>mdi-food</v-icon>
    </v-btn>

    <v-btn @click="$router.push('/')">
      <span>HOME</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="$router.push('list')">
      <span>CANTINES</span>
      <v-icon>mdi-format-list-text</v-icon>
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