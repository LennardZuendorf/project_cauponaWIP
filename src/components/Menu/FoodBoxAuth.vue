<template>
  <v-container>

    <v-list two-line>
      <v-list-item-group
          multiple
          v-model="selected"
          active-class="primary--text"
      >

        <template v-for="(food, index) in selectedMenu">

          <v-list-item
              :key="food.name">
            <template v-slot:default="{ active }">

              <v-list-item-content>
                <v-list-item-title
                    v-text="food.name">
                </v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="food.category"
                ></v-list-item-subtitle>

                <v-list-item-subtitle>

                  <v-chip-group
                      column
                  >
                    <v-chip
                        v-for="note in food.notes"
                        :key="note"
                        class="ma-2"
                        small
                        color="primary"
                    >
                      {{ note }}
                    </v-chip>
                  </v-chip-group>

                </v-list-item-subtitle>

                <v-list-item-subtitle>

                  <v-chip-group column>
                    <v-chip class="ma-2" x-small color="background">
                      students pay {{food.prices.students}}
                    </v-chip>

                    <v-chip class="ma-2" x-small color="background">
                      employees pay {{food.prices.employees}}
                    </v-chip>

                    <v-chip class="ma-2" x-small color="background">
                      others pay {{food.prices.others}}
                    </v-chip>
                  </v-chip-group>
                </v-list-item-subtitle>

              </v-list-item-content>
              <v-list-item-action>

                <v-icon
                    v-if="!active"
                    color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                    v-else
                    color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>

            </template>
          </v-list-item>

          <v-divider
              v-if="index < selectedMenu.length - 1"
              :key="index"
          ></v-divider>

        </template>
      </v-list-item-group>
    </v-list>
  </v-container>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'FoodBox',

  computed: mapState([
      'selectedCafeteria', 'selectedMenu'
  ]),

  data(){
    return{
     selected: [4]
    }
  },

  updated() {
    this.$store.dispatch('getOpen', selectedCafeteria.id);
    this.$store.dispatch('loadMenu', selectedCafeteria.id)
  }
}

</script>

<style scoped>

</style>