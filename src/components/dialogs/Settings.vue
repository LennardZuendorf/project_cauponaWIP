<template>
  <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="white"
          dark
          v-bind="attrs"
          v-on="on"
          text
          block
          large
      >
        SETTINGS
      </v-btn>
    </template>

    <v-card>
      <v-toolbar
          dark
          color="primary"
      >
        <v-btn
            icon
            dark
            @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>SETTINGS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        </v-toolbar-items>
      </v-toolbar>

      <v-form v-model="valid">
        <v-container>
          <v-row align-content="center">

            <v-col
                cols="12"
                md="4"
            >
              <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="first name"
                  value="Hans"
                  required
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
              <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="last name"
                  value="Meier"
                  required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="your password"
                  hint="at least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="type your password again"
                  hint="at least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-combobox
                  v-model="foodSelect"
                  :items="foodItems"
                  label="Your favorite food (up to 5)"
                  multiple
                  chips
              ></v-combobox>
            </v-col>

            <v-col cols="12">
              <v-combobox
                  v-model="CafeteriaSelect"
                  :items="CafeteriaItems"
                  label="Your favorite two cafeterias"
                  multiple
                  chips
              ></v-combobox>
            </v-col>

            <v-col cols="3">
              <v-btn
                  class="mr-4"
                  color="primary"
                  type="submit"
                  :disabled="invalid"
              >
                save
              </v-btn>
            </v-col>

            <v-col cols="3">
              <v-btn
                  @click="clear"
                  class="mr-4"
                  color="error">
                reset
              </v-btn>
            </v-col>


          </v-row>
        </v-container>
      </v-form>

    </v-card>

  </v-dialog>
</template>

<script>
export default {
  name: "SETTINGS",
  data() {

    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      foodSelect: ['Vuetify', 'Programming'],
      foodItems: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      CafeteriaSelect: ['Vuetify', 'Programming'],
      CafeteriaItems: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  }
}

</script>

<style scoped>

</style>