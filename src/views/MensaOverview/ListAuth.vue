<template>
  <div class="List">
    <v-container full-height>

      <v-col>
        <v-card
            elevation="3"
            color="background"
        >

          <v-card-title>
            your favorite cantine
          </v-card-title>

          <v-card-subtitle>
            this is the one you selected as favorite
          </v-card-subtitle>

          <MensaListFavorite></MensaListFavorite>

        </v-card>
      </v-col>

      <v-col>
        <v-card
            elevation="3"
            color="background"
        >

          <v-card-title>
            see nearby cantines
          </v-card-title>

          <v-card-subtitle>
            Please allow us access to your location!
          </v-card-subtitle>

            <MensaListNearbyAuth></MensaListNearbyAuth>

        </v-card>
      </v-col>

    </v-container>
  </div>
</template>

<script>
import MensaListNearbyAuth from "@/components/MensaOverview/MensaListNearbyAuth";
import MensaListFavorite from "@/components/MensaOverview/MensaListFavorite";

export default {
  name: "ListAuth",
  components: {MensaListFavorite, MensaListNearbyAuth}
}
</script>

<style scoped>

</style>