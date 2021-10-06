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
        LOGIN
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
        <v-toolbar-title>LOGIN</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row align-content="center">
            <v-col cols="12">
              <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="e-mail"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-btn
                  class="mr-4"
                  color="primary"
                  type="submit"
                  :disabled="invalid"
              >
                login
              </v-btn>
            </v-col>

            <v-col cols="4">
              <v-btn
                  class="mr-4"
                  color="info"
              >
                register
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
import Register from "@/components/dialogs/Register";

export default {
  name: "Login",
  components: {Register},
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
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
  },
}

</script>

<style scoped>

</style>