<template>
  <v-container>

    <v-row>

      <v-col cols="4" v-for="item in menu">
        <v-card>

          <v-card-title>
            {{item.name}}
          </v-card-title>

          <v-card-subtitle>
            {{item.category}}
          </v-card-subtitle>

        </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'FoodBox',
  data() {
    return {
      menu: [],
      url: 'https://openmensa.org/api/v2/canteens/'
    };
  },
  methods: {
    loadMenu(canteen, day) {
      let apiUrl = this.url+canteen+"/days/"+day+"/meals"

      axios
          .get(apiUrl)
          .then(response => {
            response = response.data;
            this.menu = response.data;
          })
          .catch(() => {
            this.menu = [];
          });
    }
  }
};
</script>

<style scoped>

</style>