<template>
    <span>
        <v-navigation-drawer app v-model="drawer" color="primary" dark disable-resize-watcher>
          <v-container align-content="end" fill-height>

            <v-row>
              <v-spacer></v-spacer>
              <About></About>
              <v-spacer></v-spacer>
            </v-row>

            <v-row>
              <v-spacer></v-spacer>
              <Login></Login>
              <v-spacer></v-spacer>
            </v-row>

            <v-row>
              <v-spacer></v-spacer>
                  <v-btn
                      color="white"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      text
                      block
                      large
                  >
                    LOGOUT
                  </v-btn>
              <v-spacer></v-spacer>
            </v-row>

            <v-row>
              <v-spacer></v-spacer>
              <Settings></Settings>
              <v-spacer></v-spacer>
            </v-row>

          </v-container>

        </v-navigation-drawer>
        <v-app-bar app color="primary" dark>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>

          <v-toolbar-title>
            <h3>CAUPONA</h3>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>
    </span>
</template>

<script>
import About from "@/components/dialogs/About";
import Login from "@/components/dialogs/Login";
import Settings from "@/components/dialogs/Settings";

export default {
  name: 'Toolbar',
  components: {Login, About, Settings},

  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style scoped>
</style>