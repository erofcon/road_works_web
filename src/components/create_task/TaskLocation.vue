<template>
  <div>
    <h5>Выберите местоположение</h5>
    <LMap style="height: 300px" :zoom="zoom" :center="center" :useGlobalLeaflet="false" @click="getPosition">
      <LTileLayer :min-zoom="3" :max-zoom="18" :url="url" :attribution="attribution"></LTileLayer>
      <LMarker v-if="location" :lat-lng="location"></LMarker>
    </LMap>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "TaskLocation",
  data() {
    return {
      url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [43.4777807765672, 43.59575092792511],
    }
  },
  methods: {
    getPosition(e) {
      this.$store.commit('createTask/setLocation', e.latlng);
    },
  },
  computed: {
    ...mapState({
      location: state => state.createTask.location,
    }),
  },
}
</script>

<style scoped>
:deep(.leaflet-bottom) {
  display: none !important;
}

</style>
