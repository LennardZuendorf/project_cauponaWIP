<template>
  <v-app>
    <TopToolbar></TopToolbar>

    <v-main>
      <v-container>

      </v-container>
    </v-main>

    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import TopToolbar from "@/components/TopToolbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

export default {
  name: "Map"
}
</script>

<style scoped>

</style>