<template>
  <v-container>

    <v-list two-line>
      <v-list-item-group
          multiple
      >

        <template v-for="(cantine, index) in closeCantines">

          <v-list-item :key="cantine.name" @click="cantineClicked(cantine)">
            <template>
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
        this.$router.push('Menu')
      }
    }
    }

</script>

<style scoped>

</style>