<template>
  <v-container fluid>

    <v-form>
      <v-container>
        <v-row>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Name"
                placeholder="your name, i.e. Max"
            ></v-text-field><!-- TODO: Replace with InPut from Firebase-->
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Surname"
                placeholder="your surname, i.e. Mueller"
            ></v-text-field><!-- TODO: Replace with InPut from Firebase-->
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="password"
                counter
                @click:append="show1 = !show1"
            ></v-text-field><!-- TODO: Replace with InPut from Firebase-->
          </v-col>
        </v-row>

      </v-container>
    </v-form>

    <v-row>
      <v-col cols="12">
        <v-combobox
            v-model="select"
            :items="CafeteriaItems"
            label="Selected Cafeterias"
            multiple
            chips
        ></v-combobox>
      </v-col>

      <v-col cols="12">
        <v-combobox
            v-model="select"
            :items="FoodItems"
            label="Favorite Food"
            multiple
            chips
        ></v-combobox>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
//TODO: Implement Firebase Login (or Okta)

export default {
  name: "Profile",
  data () {
    return {
      select: ['Vuetify', 'Programming'],
      CafeteriaItems: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      FoodItems: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ]
    }
  },
}
//TODO: Add Calls to Firebase or get Data from App.vue
</script>

<style scoped>

</style>