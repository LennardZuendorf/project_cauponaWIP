<template>
  <v-container fill-height>
    <v-row align-content="center">

      <v-col cols="12">
        <v-img src="./src/assets/icon_cap"
               max-height="25%"
               max-width="25%"
        ></v-img>
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
export default {
  name: "ErrorMessage"
}
</script>

<style scoped>

</style>