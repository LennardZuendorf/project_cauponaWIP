<template>
  <div class="List">
    <v-container full-height>

      <v-col>
        <v-card
            elevation="3"
            color="background"
        >

          <v-card-title>
            check out the menu
          </v-card-title>

          <v-card-subtitle>
            menu for {{selectedCafeteria.name}}
          </v-card-subtitle>

          <food-box-auth></food-box-auth>

        </v-card>
      </v-col>

    </v-container>
  </div>
</template>

<script>
import FoodBoxAuth from "@/components/Menu/FoodBoxAuth";
import {mapState} from "vuex";

export default {
  name: "MenuAuth",
  components:{FoodBoxAuth},

  computed: mapState([
    'selectedCafeteria'
  ]),
}
</script>

<style scoped>

</style>