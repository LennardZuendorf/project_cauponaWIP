<template>
  <v-app>
    <Toolbar></Toolbar>

    <v-main>
      <router-view/>
    </v-main>

    <Navigation></Navigation>
  </v-app>
</template>

<script>

import Toolbar from "@/components/Toolbar";
import Navigation from "@/components/Navigation";

export default {
  name: 'app',

  components: {Navigation, Toolbar},

  data: () => ({}),

  beforeMount(){

    this.$store.dispatch('loadCafeterias');
    this.$store.dispatch('getCloseCafeterias');
  }
};

</script>
