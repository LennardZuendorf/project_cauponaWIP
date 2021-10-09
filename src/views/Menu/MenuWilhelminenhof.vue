<template>
  <div class="MenuWilhelminenhof">

    <v-container fill-height>
      <h1>MENSA WILHELMINENHOF</h1>
    </v-container>

    <v-container fill-height>
      <h1>TODAYS SPECIALS</h1>
      <div class="cardContainer">
        <v-card v-for="today in anzTodays" :key="today"
                class="mx-auto card"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Todays Special
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
      <h1>MAIN COURSES</h1>
      <div class="cardContainer">
        <v-card v-for="menu in anzMenues" :key="menu"
                class="mx-auto card"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Main Courses
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
      <h1>DESSERTS</h1>
      <div class="cardContainer">
        <v-card v-for="dessert in anzDesserts" :key="dessert"
                class="mx-auto card"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Dessert
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
import FoodBox from "@/components/Menu/FoodBox";

export default {
  name: "MenuWilhelminenhof",

  data(){
    return{anzMenues: 5,
      anzTodays: 5,
      anzDesserts: 5}
  }
}
</script>

<style scoped>
.card{
  width: 170px;
  height: 170px;
  elevation: 3;
  color: background;
}
.cardContainer{
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>