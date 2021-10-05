<template>
  <v-card class="overflow-hidden">
    <v-app-bar dense fixed color="background">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-row class="d-flex align-content-center justify-center">
        <v-col cols="6" >
          <v-toolbar-title >
            <v-img :src="require('@/assets/caupona_logo_text.svg')" max-height="50px"></v-img>
          </v-toolbar-title>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-card-title>

    </v-card-title>

    <v-card-text>
      <v-row>


        <!--
        <About></About>
        <Login></Login> TODO: Find out how to change if logged in. to:
        -->
        <!--
        <About></About>
        <Profile></Profile>
        <v-btn> LOGOUT </v-btn>
        -->

      </v-row>
    </v-card-text>

  </v-card>


</template>

<script>
import About from "@/components/Popups/About";
import Login from "@/components/Popups/Login";
export default {
  name: 'TopToolbar',
  components: {Login, About},
  data: () => ({
    collapseOnScroll: true,
  }),
}

//TODO: Implement Routes Changes on Click
</script>

<style>

</style>