<template>
  <div class="List">
    <v-container full-height>

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

          <MensaListNearby></MensaListNearby>

        </v-card>
      </v-col>

    </v-container>
  </div>
</template>

<script>
import MensaListNearby from "@/components/MensaOverview/MensaListNearby";
import MensaListFavorite from "@/components/MensaOverview/MensaListFavorite";

export default {
  name: "List",
  components: {MensaListNearby, MensaListFavorite}
}
</script>

<style scoped>

</style>