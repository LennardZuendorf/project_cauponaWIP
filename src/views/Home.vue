<template>
  <div class="Home">
    <v-container fill-height>

      <v-row>
        <v-card
            class="mx-auto"
            width="95%"
            height="45%"
            elevation="3"
            color="background"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                find nearby cantines
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <MapBox></MapBox>
          </v-card-text>

        </v-card>
      </v-row>

      <v-row>
        <v-card
            class="mx-auto"
            width="95%"
            height="45%"
            elevation="3"
            color="background"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                discover the nearest cantines
              </v-list-item-title>
              <v-list-item-subtitle>
                Cantine XY
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <foo
          </v-card-text>
        </v-card>

      </v-row>
    </v-container>

  </div>
</template>

<script>

export default {
  name: "Home"
}
</script>

<style scoped>