<template>
  <div class="HomeLoggedIn">

    <v-container>
    <h1>HI HANS!</h1>
      YOUR SUGGESTION FOR TODAY:
    </v-container>

    <v-container fill-height>
      <h2>SAVED CANTINE:</h2>
    </v-container>
    <v-container fill-height>
      <h1>MENSA TRESKOWALLEE</h1>
      <div class="cardContainer2">
        <v-card v-for="favCantine in anzFavCantines" :key="favCantine"
                class="mx-auto card2"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Cantine test
              </v-list-item-title>
              <v-list-item-subtitle>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <FoodBox></FoodBox>
          </v-card-text>

        </v-card>
      </div>
    </v-container>

    <v-container fill-height>
      <h2>NEAREST CANTINE:</h2>
    </v-container>
    <v-container fill-height>
      <h1>MENSA WILHELMINENHOF</h1>
      <div class="cardContainer2">
        <v-card v-for="nearCantine in anzNearCantines" :key="nearCantine"
                class="mx-auto card2"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Cantine test
              </v-list-item-title>
              <v-list-item-subtitle>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <FoodBox></FoodBox>
          </v-card-text>

        </v-card>
      </div>
    </v-container>

  </div>
</template>

<script>
import MapBox from "@/components/Map/MapBox";
export default {
  name: "HomeLoggedIn",
  components: {MapBox},

  data(){
    return{anzFavCantines: 4,
      anzNearCantines: 4}
  }
}
</script>

<style scoped>
.card2{
  width: 170px;
  height: 170px;
  elevation: 3;
  color: background;
}
.cardContainer2{
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>