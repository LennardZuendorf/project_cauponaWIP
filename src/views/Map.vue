<template>
  <v-app>
    <TopToolbar></TopToolbar>

    <v-main>
      <v-container>
        <MapBox></MapBox>
      </v-container>
    </v-main>

    <BottomNav></BottomNav>
  </v-app>
</template>

<script>

import TopToolbar from "@/components/TopToolbar";
import BottomNav from "@/components/BottomNav";
import MapBox from "@/components/MapBox";

export default {
  name: "Map",
  components: {MapBox, BottomNav, TopToolbar}
}
</script>

<style scoped>

</style>