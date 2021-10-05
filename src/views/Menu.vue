<template>
  <div class="Menu">
    <v-card
        class="mx-auto"
        max-width="95%"
        max-height="95%"
        elevation="3"
        color="background"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            Check out the menu
          </v-list-item-title>
          <v-list-item-subtitle>
            Your selected cafeteria:
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <FoodBox></FoodBox>
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
import FoodBox from "@/components/Menu/FoodBox";

export default {
  name: "Menu"
}
</script>

<style scoped>

</style>