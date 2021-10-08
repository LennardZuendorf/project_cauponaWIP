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
import Footer from "@/components/Footer"
import {mapState} from "vuex";

export default {
  name: 'app',

  components: {Navigation, Toolbar, Footer},

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
