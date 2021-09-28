<template>
  <v-app>
    <TopToolbar></TopToolbar>
  </v-app>
</template>

<script>
import TopToolbar from './components/TopToolbar'

export default {
  name: 'App',

  components: {
    TopToolbar,

  },

  data: () => ({
    //
  }),
};
</script>
