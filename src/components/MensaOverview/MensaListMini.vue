<template>
  <v-container>

    <v-list two-line>
      <v-list-item-group
          multiple
      >
        <v-list-item :key="closeCantines[0].name">

            <v-list-item-content>
                <v-list-item-title
                    v-text="closeCantines[0].name">
                </v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="closeCantines[0].city"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                    v-text="closeCantines[0].address"
                ></v-list-item-subtitle>
              </v-list-item-content>

        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :key="closeCantines[1].name">

              <v-list-item-content>
                <v-list-item-title
                    v-text="closeCantines[1].name">
                </v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="closeCantines[1].city"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                    v-text="closeCantines[1].address"
                ></v-list-item-subtitle>
              </v-list-item-content>

          </v-list-item>
      </v-list-item-group>
    </v-list>

  </v-container>
</template>

<script>
import router from 'router';
import { mapState } from 'vuex';

export default {

  name: 'FoodBox',
  computed: mapState([
    'closeCantines'
  ])
}

</script>

<style scoped>

</style>