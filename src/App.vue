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

export default {
  name: 'App',

  components: {
    BottomNav,
    TopToolbar,

  },
  data: () => ({
  }),
};
</script>
