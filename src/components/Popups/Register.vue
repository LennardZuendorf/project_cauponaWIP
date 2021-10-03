<template>
  <v-row justify="space-around">
    <v-col cols="auto">

      <v-dialog
          transition="dialog-top-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
          >REGISTER</v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="primary"
                dark
            >REGISTER</v-toolbar>
            <v-card-text>
              <v-row>
                <form>
                  <v-col cols="6">
                    <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="25"
                        label="name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                        v-model="surname"
                        :error-messages="nameErrors"
                        :counter="25"
                        label="surname"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                    ></v-text-field>
                  </v-col>

                  <v-text-field
                      v-model="email"
                      :error-messages="emailErrors"
                      label="e-mail"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                  ></v-text-field>
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

                  <v-btn
                      class="mr-4"
                      @click="submit"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </form>
              </v-row>
            </v-card-text>

            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >close</v-btn>
            </v-card-actions>
          </v-card>

        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>