<template>
  <div v-if="isLoading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>
  <div v-else class="col xl:col-10 mx-auto my-5 container">
    <OneDetectionResult
        v-if="loadedData"
        v-for="data in loadedData"
        :data="data"
        class="fadeindown animation-duration-200 cursor-pointer"
        @click="$router.push('/detection_result_view/'+data.id)"
    />
  </div>
</template>

<script>
import {mapState} from "vuex";
import {DetectionResultAPI} from "@/api/api_routes/detection_result.js";
import OneDetectionResult from "@/components/detection_result/OneDetectionResult.vue";

export default {
  name: "DetectionResult",
  components: {
    OneDetectionResult
  },
  data() {
    return {
      isLoading: true,
      loadedData: [],
    }
  },
  mounted() {
    if (!this.currentUser.user.is_creator) {
      // this.$router.push({name: 'pageNotFound'});
    } else {
      DetectionResultAPI.getAllDetections().then(result => {
        this.loadedData = result.data;
        this.isLoading = false;
      }).catch(reason => {
        this.$router.push('/login');
      })
    }
  },

  computed: {
    ...mapState({
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>

</style>
