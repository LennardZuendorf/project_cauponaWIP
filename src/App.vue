<template>
  <v-app>
  <top-toolbar></top-toolbar>


    <router-link to="/"> HOME</router-link>
    <router-link to="/"> ABOUT</router-link>

    <router-view></router-view>


  <BottomNav></BottomNav>
  </v-app>
</template>

<script>

import TopToolbar from "@/components/TopToolbar";
import BottomNav from "@/components/BottomNav";
export default {
  components: {BottomNav, TopToolbar},
  data() {
    return {};},
  name: 'App',
  };
</script>
