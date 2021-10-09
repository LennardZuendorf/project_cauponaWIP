<template>
  <v-container fill-height>
    <v-row align-content="center">

      <v-col
          cols="12"
          height="25%"
          width="25%"
      >
        <IconCap></IconCap>
      </v-col>

      <v-col cols="12">
        <h2>
          An error occurred. We're sorry this happened, please reload the page. If this occurs again, please write us a mail!
        </h2>
      </v-col>

      <v-col cols="12">
        <h4>error code: </h4>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import IconCap from "@/components/logos/IconCap";

export default {
  name: "ErrorMessage",
  components:{IconCap}
}
</script>

<style scoped>

</style>