<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>

  <div v-else class="col">
    <div class="grid">
      <ImageGrid :base-url="baseUrl"/>
      <DetailImage @deleteImages="deleteImages" :base-url="baseUrl"/>
    </div>
  </div>

</template>


<script>
import {defaultApiInstance} from "@/api";
import {mapState} from "vuex";
import ImageGrid from "@/components/detection_result_images/ImageGrid";
import DetailImage from "@/components/detection_result_images/DetailImage";


export default {
  name: "DetectionResultImages",
  components: {
    DetailImage,
    ImageGrid
  },
  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      loading: true,
      close: true,
    }
  },
  methods: {
    deleteImages(e) {
      setTimeout(() => {
        if (e.length > 0) {
          this.$store.commit("detectionResultGrid/setSelectedImages", e);
          this.$store.dispatch("detectionResultGrid/deleteImages");
          this.$store.commit("detectionResultGrid/setSelectOneSelectImage", null);
        }
      }, 100)
    },
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
      this.$router.push({name: 'pageNotFound'});
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
      oneSelectImage: state => state.detectionResultGrid.oneSelectImage,
      selectedGroupId: state => state.createTask.selectedGroupId,
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style>
.p-link {
  z-index: 999 !important;
}


</style>
