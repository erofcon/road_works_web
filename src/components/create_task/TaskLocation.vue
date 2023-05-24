<template>
  <div>
    <p class="text-lg mb-2 text-gray-800">Выберите местоположение</p>
    <l-map style="height: 300px" :zoom="zoom" :center="center" :useGlobalLeaflet="false" @click="getPosition">
      <l-tile-layer :min-zoom="3" :max-zoom="18" :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="location" :lat-lng="location"></l-marker>
    </l-map>
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

</style>
