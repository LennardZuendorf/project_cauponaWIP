<template>
  <div class="Home">
    <v-container fill-height>
      <h1>FIND CANTINES</h1>
      <div class="cardContainer">
        <v-card v-for="cantine in anzCantines" :key="cantine"
                class="mx-auto card"
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
  name: "Home",
  components: {MapBox},

  data(){
    return{anzCantines: 2,
      anzNearCantines: 4}
  }
}
</script>

<style scoped>
.card{
  width: 100%;
  height: 100%;
  elevation: 3;
  color: background;
  margin-bottom: 20px;
}
.cardContainer{
  width: 100%;
  display: flex;
  flex-direction: column;
}
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