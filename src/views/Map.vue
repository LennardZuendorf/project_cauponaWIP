<template>
  <div class="Map">
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
  </div>
</template>

<script>
export default {
  name: "Map",


  data(){
    return{anzCantines: 5}
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