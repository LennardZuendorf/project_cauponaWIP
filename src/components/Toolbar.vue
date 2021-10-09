<template>
    <span>
    <v-navigation-drawer app v-model="drawer" color="primary" dark disable-resize-watcher>
          <v-container align-content="center" full-height>

            <v-row >

              <v-col cols="12"
                height="10%"
                width="100%"
              >
                <logo-long-white></logo-long-white>
              </v-col>

              <v-col cols="12">
                <v-spacer></v-spacer>
                <About></About>
                <v-spacer></v-spacer>
              </v-col>

              <!--

              <v-col cols="12">
                <v-spacer></v-spacer>
                <Login></Login>
                <v-spacer></v-spacer>
              </v-col>

              <v-col cols="12">
                <v-spacer></v-spacer>
                <Register></Register>
                <v-spacer></v-spacer>
              </v-col>

                </template>

              <template v-if="!loggedIn">

              <v-col cols="12">
                <v-spacer></v-spacer>
                <v-btn
                      color="white"
                      dark
                      text
                      block
                      large
                      onlick="this.$router.push('/logout')"
                >
                    LOGOUT
                </v-btn>
                <v-spacer></v-spacer>
              </v-col>
              <v-col cols="12">
                <v-spacer></v-spacer>
                <Settings></Settings>
                <v-spacer></v-spacer>
              </v-col>

             </template>
             -->


            </v-row>
          </v-container>

        </v-navigation-drawer>

      <v-app-bar app color="primary" dark>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>

          <v-toolbar-title>
            <v-col cols="12"
                   height="10%"
                   width="100%"
            >
              <logo-long-white></logo-long-white>
            </v-col>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>

    </span>
</template>

<script>
import About from "@/components/dialogs/About";
import Login from "@/components/dialogs/Login";
import Settings from "@/components/dialogs/Settings";
import Register from "@/components/dialogs/Register";
import LogoLongWhite from "@/components/logos/LogoLongWhite";
import auth from "@/auth";

export default {
  name: 'Toolbar',
  components: {Register, Login, About, Settings, LogoLongWhite},

  data() {
    return {
      drawer: false,
      loggedIn: auth.loggedIn()
        }
      },
      created () {
        auth.onChange = loggedIn => {
          this.loggedIn = loggedIn
        }
      }
    }
</script>

<style scoped>
</style>