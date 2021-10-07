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
        REGISTER
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
        <v-toolbar-title>REGISTER</v-toolbar-title>
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

            <v-col cols="4">
              <v-btn
                  class="mr-4"
                  color="primary"
                  type="submit"
                  :disabled="invalid"
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
export default {
  name:"Register",
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      show: false,
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v =>
            v.length >= 6 ||
            'Password must be greater than 6 characters'
      ],
      methods: {
        submit() {
          if (this.$refs.form.validate()) {
            this.$store.dispatch('userRegister', {
              email: this.email,
              password: this.password
            });
          }
        },
        clear(){
          this.password = "";
          this.email = "";
        }
      }
    }
  },
}

</script>

<style scoped>

</style>