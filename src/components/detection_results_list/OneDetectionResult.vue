<template>

  <div class="my-5">
    <div class="flex align-items-center justify-content-between">
      <div class="flex align-items-start">
        <img src="https://avatars.githubusercontent.com/u/104511593?v=4"
             class="w-3rem h-3rem flex-shrink-0 mr-3 border-circle" alt="logo">
        <div class="flex flex-column">
          <span class="text-900 font-medium mb-1 cursor-pointer">{{ data.username }}</span>
          <span
              class="text-500 font-medium text-sm">{{
              moment(new Date(data.create_datetime)).format('DD.MM.YYYY HH:mm')
            }}</span>
          <p class="text-600 p-0 m-0 line-height-3 pt-3">{{ data.descriptions }}</p>
        </div>
      </div>
      <div>
        <span class="font-bold">изображении: {{ data.detection_image_count }}</span>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment'

export default {
  name: "OneDetectionResult",
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      moment: moment,
    }
  },
}
</script>

<style scoped>

</style>
