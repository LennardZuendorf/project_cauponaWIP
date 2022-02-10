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

      <v-form ref="form" @submit.prevent="login" autocomplete="off">
        <v-container>
          <v-row align-content="center">
            <v-col cols="12">
              <v-text-field
                  v-model="email" placeholder="email" v-focus
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                  v-model="pass" placeholder="password" type="password"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-btn
                  class="mr-4"
                  color="primary"
                  type="submit"
              >
                login
              </v-btn>
            </v-col>

            <v-col cols="3">
              <p v-if="error" class="error">Bad login information</p>
            </v-col>
          </v-row>
        </v-container>

      </v-form>

      </v-card>
  </v-dialog>
</template>

<script>
import auth from "@/auth";

export default {
    data () {
      return {
        email: '',
        pass: '',
        error: false
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }

</script>

<style scoped>

</style>