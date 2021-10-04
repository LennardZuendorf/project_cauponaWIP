<template>
  <v-app>
    <v-main>
      <v-container>

        <v-row>
          <v-col cols="10">
            <div>FIND CANTINES</div> <!-- TODO: set Font Size and style-->
            <map-box></map-box>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10">
            <div>NEAREST CANTINE:</div> <!-- TODO: set Font Size and style-->
            <!-- TODO: add message boxes-->
            <food-row></food-row>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MapBox from "@/components/Map/MapBox";
import FoodRow from "@/components/Food/FoodRow";

export default {
  name: "Home",
  components: {FoodRow, MapBox}
}
</script>

<style scoped>

</style>