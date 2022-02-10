<template>
    <v-container>

      <v-list two-line>
        <v-list-item-group
            v-model="selected"
            active-class="primary--text"
            multiple
        >
          <v-list-item :key="favoriteCafeteria.name">

            <v-list-item-content>
              <v-list-item-title
                  v-text="favoriteCafeteria.name">
              </v-list-item-title>

              <v-list-item-subtitle
                  class="text--primary"
                  v-text="favoriteCafeteria.city"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
                  v-text="favoriteCafeteria.address"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

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

          </v-list-item>
        </v-list-item-group>
      </v-list>

  </v-container>
</template>

<script>

  import {mapState} from "vuex";

  export default {
    name: 'MensaListFavorite',

    computed: mapState([
      'favoriteCafeteria'
    ]),

    data () {
      return{
        selected: [1]
      }
    }
  }



</script>

<style scoped>

</style>