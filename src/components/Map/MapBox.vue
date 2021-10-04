<template>
  <v-app>
    <div id="geocoder" />
    <div id="map" :class="['map', 'pad2']" />
  </v-app>
</template>

<script>
//TODO: Implement getting Location data trough browser

  import mapboxgl from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";
  import { onUpdated, ref } from "@vue/runtime-core";
  import { onMounted, render } from "vue";
  export default {
    name: "MapBox",
    props: {
      long: {
        type: Boolean,
      },
      mock: {
        type: Array,
        default: () => [],
      },
      category: {
        type: String,
        default: () => "",
      },
    },
    setup(props) {
      const accessToken = ref(
          "pk.eyJ1IjoibGVubmFyZHp1ZW5kb3JmIiwiYSI6ImNrdWJsYmpvajBycTgydW12bnZvaGl2ODMifQ.UZORT4TshpxdxgDo5kURnw"
      );
      let map, markers, autoZoom, currentMarker;
      onMounted(() => {
        mapboxgl.accessToken = accessToken.value;
        map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/light",
          center: [0, 0],
          zoom: 10.5,
        });
        map.addControl(
            new mapboxgl.GeolocateControl({
              fitBoundsOptions: {
                maxZoom: 13
              },
              positionOptions: {
                enableHighAccuracy: true,
              },
              trackUserLocation: true,
            })
        );
        renderMarkers();
      });

      //TODO: Implement getting cached list of Cafeterias trough app.vue
      const renderMarkers = () => {
        const filtered = filterData();
        zoomCenter(filtered);
      };
      const zoomCenter = (filtered) => {
        console.log(filtered);
        const avgLat =
            filtered.reduce((acc, cur) => acc + cur.location.coordinates[0], 0) /
            filtered.length;
        const avgLng =
            filtered.reduce((acc, cur) => acc + cur.location.coordinates[1], 0) /
            filtered.length;
        if (avgLat && avgLng) map.setCenter([avgLat, avgLng]);
      };
      const filterData = () => {
        return props.category === ""
            ? props.mock
            : props.mock.filter((loc) => loc.category === props.category);
      };
      onUpdated(() => {
        markers.forEach((marker) => {
          marker.remove();
          if (marker.category === props.category || props.category === "")
            marker.addTo(map);
        });
        zoomCenter(
            props.category === ""
                ? props.mock
                : props.mock.filter((loc) => loc.category === props.category)
        );
        renderMarkers();
      });
    },
  };
</script>

<style scoped>

</style>