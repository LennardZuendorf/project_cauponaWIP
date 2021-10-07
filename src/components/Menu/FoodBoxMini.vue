<template>
  <v-container>

    <v-row>

      <v-col cols="4" v-for="item in menu">
        <v-card>

          <v-card-title>
            {{item.name}}
          </v-card-title>

          <v-card-subtitle>
            {{item.category}}
          </v-card-subtitle>

        </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'FoodBox',
    data() {
      return {
      };
    }
  }
</script>

<style scoped>

</style>