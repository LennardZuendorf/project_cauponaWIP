<template>
  <div class="Home">
    <v-container full-height>

      <v-col>
        <v-card
            height="40%"
            elevation="3"
            color="background"
        >

          <v-card-title>
            see the nearest cantines
          </v-card-title>

          <v-card-subtitle>
            Please allows us to access your location!
          </v-card-subtitle>

          <MensaListFavorite></MensaListFavorite>

        </v-card>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <v-card
            height="40%"
            elevation="3"
            color="background"
        >

          <v-card-title>
            your favorite cantine
          </v-card-title>

          <v-card-subtitle>
            {{selectedCafeteria.name}}
          </v-card-subtitle>

          <v-card-text>
            <FoodBoxMini></FoodBoxMini>
          </v-card-text>

        </v-card>
      </v-col>

    </v-container>
  </div>

</template>

<script>
import { mapState } from 'vuex';

import FoodBoxMini from "@/components/Menu/FoodBoxMini";
import MensaListMini from "@/components/MensaOverview/MensaListMini";
import MensaListFavorite from "@/components/MensaOverview/MensaListFavorite";


export default {
  name: "HomeAuth",
  components: {MensaListFavorite, FoodBoxMini, MensaListMini},

  computed: mapState([
    'closeCantines', 'selectedCafeteria', "favoriteCafeteria"
  ]),

  mounted() {
    this.$store.dispatch('selectCantine', `${Store.state.favoriteCafeteria}`);
  }
}
</script>

<style>

</style>