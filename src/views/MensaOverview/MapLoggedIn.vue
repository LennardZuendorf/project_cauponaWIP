<template>
  <div class="MapLoggedIn">
    <v-container fill-height>
      <h1>FIND CANTINES</h1>
    </v-container>

    <v-container fill-height>
      <h1>YOUR FAVORITE CANTINE</h1>
      <div class="cardContainer">
        <v-card v-for="favCantine in anzFavCantines" :key="favCantine"
                class="mx-auto card"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Favorite Cantine test
              </v-list-item-title>
              <v-list-item-subtitle>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <MensaListNearby></MensaListNearby>
          </v-card-text>

        </v-card>
      </div>
    </v-container>

    <v-container fill-height>
    <h1>NEAREST CANTINES</h1>
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
  </div>
</template>

<script>
import MensaListNearby from "@/components/MensaOverview/MensaListNearby";

export default {
  name: "MapLoggedIn",
  components: {MensaListNearby},
  data(){
    return {anzCantines: 3,
            anzFavCantines: 1}
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
</style>