<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="background lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="background darken-4" dark>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        </v-toolbar>
    </span>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      appTitle: 'CAUPONA',
      drawer: false,
      items: [
        { title: 'about' },
        { title: 'help' },
        { title: 'login' }
      ]
    };
  }
};
</script>

<style scoped>

</style>