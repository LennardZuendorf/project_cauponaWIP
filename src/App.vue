<template>
  <v-app>

    <v-main>
      <TopToolbar></TopToolbar>
            <router-view></router-view>
      <BottomNav></BottomNav>
    </v-main>

    <v-footer>
      <CauponaFooter></CauponaFooter>
    </v-footer>

  </v-app>

</template>

<script>

//TODO: Implement 2 Calls & Caching: Cafeteria List, User Data

import TopToolbar from "@/components/TopToolbar";
import BottomNav from "@/components/BottomNav";
import CauponaFooter from "@/components/CauponaFooter";
export default {
  components: {BottomNav, TopToolbar, CauponaFooter},
  data() {
    return {};},
  name: 'App',
  };
</script>
