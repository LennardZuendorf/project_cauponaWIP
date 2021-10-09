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

          <MensaListMini></MensaListMini>

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
            discover one cantine
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


export default {
  name: "Home",
  components: {FoodBoxMini, MensaListMini},

  computed: mapState([
    'closeCantines', 'selectedCafeteria'
  ]),
}
</script>

<style>

</style>