<template>
  <v-container>
    <v-row>

      <v-col cols="6" v-for="cafeteria in `${state.closeCafeterias}`">
        <v-list-item two-line>
          <v-list-item-title>
            {{cafeteria.name}}
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-btn

                @click="selectionMade({{cafeteria.id}})"
            >

            </v-btn>
          </v-list-item-subtitle>

        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="mdi-city"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{cafeteria.city}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="mdi-map"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{cafeteria.address}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import router from 'router';

  export default {
    name: 'MensaListNearby',

    methods: {
      selectionMade(id) {
        this.$store.dispatch('saveSelectedCafeteria', {id});
        router.push("menu")
        }
      }
    }

</script>

<style scoped>

</style>