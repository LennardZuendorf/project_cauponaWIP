<template>
  <v-app>
    <Toolbar></Toolbar>

    <v-main>
      <router-view/>
      <v-spacer></v-spacer>
    </v-main>

    <Navigation></Navigation>
  </v-app>
</template>

<script>

import Toolbar from "@/components/Toolbar";
import Navigation from "@/components/Navigation";
import {mapState} from "vuex";
import LogoLong from "@/components/logos/LogoLong";

export default {
  name: 'app',

  components: {LogoLong, Navigation, Toolbar},

  data: () => ({}),
  computed: mapState([
    'closeCantines', 'selectedCafeteria'
  ]),

  beforeMount(){
    this.$store.dispatch('loadCafeterias');
    this.$store.dispatch('getUserLocation');
    this.$store.dispatch('loadNearbyCantines')
  }
};

</script>
