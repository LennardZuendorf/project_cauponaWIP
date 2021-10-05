
<template>
  <v-app>
    <TopToolbar></TopToolbar>



    <BottomNav></BottomNav>
  </v-app>
</template>

<script>


import TopToolbar from "@/components/TopToolbar";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "vue-router";
import {computed} from "vue";


export default {
  components: {BottomNav, TopToolbar},
  setup() {
    const router = useRouter();
    const routingSpace = computed(() => {
      console.log(router.currentRoute.value.path);
      return router.currentRoute.value.path;
    });
    return {
      routingSpace,
    };
  },
  data() {
    return {
      inputGroup: [],
    };
  },
  methods: {},
};
</script>
