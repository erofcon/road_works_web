<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>

  <div v-else class="col">
    <div class="grid">
      <ImageGrid :base-url="baseUrl"/>
      <DetailImage :base-url="baseUrl"/>
    </div>
  </div>
  <DetectionResultControl :base-url="baseUrl"/>

</template>

<script>
import {defaultApiInstance} from "@/api";
import {mapState} from "vuex";
import ImageGrid from "@/components/detection_result_grid/ImageGrid.vue";
import DetailImage from "@/components/detection_result_grid/DetailImage.vue";
import DetectionResultControl from "@/components/detection_result_grid/DetectionResultControl.vue";

export default {
  name: "DetectionResultGrid",
  components: {
    DetectionResultControl,
    DetailImage,
    ImageGrid
  },
  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      loading: true,
    }
  },
  methods: {
    loadingPage() {
      this.$store.dispatch('detectionResultGrid/getDetectionImages', {id: this.$route.params.id});
      this.$store.dispatch('createTask/getRelatedGroups');
      if (this.selectedGroupId) {
        this.$store.dispatch('createTask/getRelatedExecutorUsers', this.selectedGroupId);
      }
      this.loading = false;
    },
  },
  mounted() {
    if (!this.currentUser.user.is_creator) {
      // this.$router.push({name: 'pageNotFound'});
    } else {
      this.loadingPage();
    }

  },
  unmounted() {
    this.$store.commit('createTask/resetStore');
    this.$store.commit('detectionResultGrid/resetStore');
  },
  computed: {
    ...mapState({
      selectedImage: state => state.detectionResultGrid.selectedImage,
      selectedGroupId: state => state.createTask.selectedGroupId,
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>

</style>
