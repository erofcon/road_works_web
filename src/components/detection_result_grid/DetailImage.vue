<template>
  <div v-if="oneSelectImage!=null" class="col">
    <Card class="shadow-2 border-noround">
      <template #content>
        <Image :src="baseUrl+'/'+oneSelectImage.url" alt="Image"
               imageStyle="width: 100%; height: auto; image-rendering: -webkit-optimize-contrast;" preview/>
      </template>
      <template #footer>
        <span>
          {{ oneSelectImage.latitude }}
        </span>
        <span class="ml-5">
           {{ oneSelectImage.longitude }}
        </span>
      </template>
    </Card>
  </div>
</template>


<script>
import {mapState} from "vuex";

export default {
  name: "DetailImage",
  props: {
    baseUrl: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapState({
      oneSelectImage: state => state.detectionResultGrid.oneSelectImage,
    }),
  },
}
</script>

<style scoped>
.detail-image {
  width: 100px;
}
</style>
