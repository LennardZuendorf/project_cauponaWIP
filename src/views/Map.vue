<template>
  <div class="Map">
    <v-container fill-height>

    <v-card
        class="mx-auto"
        width="95%"
        height="90%"
        elevation="3"
        color="background"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            Check for the nearest cafeterias:
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <MapBox></MapBox>
      </v-card-text>

    </v-card>

    </v-container>
  </div>
</template>

<script>
import MapBox from "@/components/Map/MapBox";
export default {
  name: "Map",
  components: {MapBox}
}
</script>

<style scoped>

</style>