<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <v-main>

    </v-main>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import TopToolbar from "@/components/TopToolbar";
import BottomNav from "@/components/BottomNav";

export default {
  name: "Home",
  components: {BottomNav, TopToolbar}
}
</script>

<style scoped>

</style>