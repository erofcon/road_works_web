<template>
  <ProgressBar v-if="loading" mode="indeterminate" style="height: 6px"></ProgressBar>
  <div v-else class="card">
    <div  v-if="result">
      <OneDetectionResult
          class="cursor-pointer"
          v-for="data in result"
          v-bind:key="data.id"
          :data="data"
          @click="$router.push('/detection_results_images/'+data.id)"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {DetectionResultAPI} from "@/api/api_routes/detection_result.js";
import OneDetectionResult from "@/components/detection_results_list/OneDetectionResult";


export default {
  name: "DetectionResultsList",
  components:{
    OneDetectionResult,
  },
  data(){
    return{
      loading: true,
      result: [],
    }
  },
  mounted() {
    if (!this.currentUser.user.is_creator && !this.currentUser.user.is_admin) {
      this.$router.push({name: 'notfound'});
    } else {
      DetectionResultAPI.getAllDetections().then(result => {
        this.result = result.data;
        this.loading = false;
      }).catch(() => {
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
