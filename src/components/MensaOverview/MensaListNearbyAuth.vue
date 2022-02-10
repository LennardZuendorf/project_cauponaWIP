<template>
  <v-container>

    <v-list two-line>
      <v-list-item-group
          v-model="selected"
          active-class="primary--text"
          multiple
      >

        <template v-for="(cantine, index) in closeCantines">

          <v-list-item :key="cantine.name" @click="cantineClicked(cantine)">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title
                    v-text="cantine.name">
                </v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="cantine.city"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                    v-text="cantine.address"
                ></v-list-item-subtitle>
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
              v-if="index < closeCantines.length - 1"
              :key="index"
          ></v-divider>

        </template>
      </v-list-item-group>
    </v-list>
  </v-container>

</template>

<script>

import router from 'router';
import { mapState } from 'vuex';

  export default {
    name: 'MensaListNearby',

    computed: mapState([
      'closeCantines'
    ]),
    methods:{

      cantineClicked(cantine){
        this.$store.dispatch('selectCantine', cantine);
      }
    }, data (){
      return{
        selected: [2]
      }
    }
    }

</script>

<style scoped>

</style>