<template>
  <v-container>

    <v-list two-line>
      <v-list-item-group
          multiple
      >

        <template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="selectedMenu[0].name"></v-list-item-title>
              <v-list-item-subtitle v-text="selectedMenu[0].category"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="selectedMenu[1].name"></v-list-item-title>
              <v-list-item-subtitle v-text="selectedMenu[1].category"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="selectedMenu[2].name"></v-list-item-title>
              <v-list-item-subtitle v-text="selectedMenu[3].category"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        </template>
      </v-list-item-group>
    </v-list>
  </v-container>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FoodBoxMini',

  computed: mapState([
      'closeCantines', 'selectedCafeteria', 'selectedMenu'
  ]),

  updated() {
    this.$store.dispatch('getOpen', selectedCafeteria.id);
    this.$store.dispatch('loadMenu', selectedCafeteria.id)
  }
}

</script>

<style scoped>

</style>