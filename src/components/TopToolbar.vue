<template>
  <v-card class="overflow-hidden">
    <v-app-bar dense fixed color="background">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-row class="d-flex align-content-center justify-center">
        <v-col cols="6" >
          <v-toolbar-title >
            <v-img :src="require('@/assets/caupona_logo_text.svg')" max-height="75px"></v-img>
          </v-toolbar-title>
        </v-col>
      </v-row>
    </v-app-bar>

  </v-card>
</template>

<script>
export default {
  name: 'TopToolbar',
  data: () => ({
    collapseOnScroll: true,
  }),
}
</script>

<style>

</style>