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
import auth from './auth'

export default {
  name: 'app',

  components: {LogoLong, Navigation, Toolbar},

  data () {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created () {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    },
  computed: mapState([
    'closeCantines', 'selectedCafeteria'
  ]),

  beforeMount(){
    this.$store.dispatch('loadCafeterias');
    this.$store.dispatch('getUserLocation');
    this.$store.dispatch('loadNearbyCantines')
    this.$store.dispatch('loadFavorites')
  }
};

</script>
