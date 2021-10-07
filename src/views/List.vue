<template>
  <div class="Map">
    <v-container fill-height>

      <v-card
          class="mx-auto"
          width="95%"
          height="45%"
          elevation="3"
          color="background"
      >

        <v-card-title>
          Check out all cafeterias:
        </v-card-title>

        <MensaListNearby></MensaListNearby>

      </v-card>

      <v-card
          class="mx-auto"
          width="95%"
          height="45%"
          elevation="3"
          color="background"
      >
        <v-card-title>
          Check out all cafeterias:
        </v-card-title>

        <MensaList></MensaList>

      </v-card>

    </v-container>
  </div>
</template>

<script>
import MensaList from "@/components/MensaOverview/MensaList";
import MensaListNearby from "@/components/MensaOverview/MensaListNearby";

export default {
  name: "Map",
  components: {MensaListNearby, MensaList}
}
</script>

<style scoped>

</style>