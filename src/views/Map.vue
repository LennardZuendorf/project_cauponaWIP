<template>
  <v-app>
    <v-main>
      <v-container>

        <v-row>
          <v-col cols="10">
            <div>FIND CANTINES</div> <!--TODO: Add Font Style and Size-->
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10">
            <MapBox></MapBox>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
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