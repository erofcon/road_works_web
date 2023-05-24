<template>
  <div
      class="flex  flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-yellow-50 border-yellow-500"
      style="border-radius: 10px;">
    <div class="text-yellow-700">
      <div class="my-1">
        <span
            class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-yellow-200">
          <i class="pi pi-truck"></i>
        </span>
        <span class="font-bold ml-2">
          <span>Контрольный выезд на: </span>
          {{ moment(new Date(data.create_datetime)).format('DD.MM.YYYY HH:mm') }}
        </span>
      </div>
      <span class="font-medium p-2">
        <i class="pi pi-user-edit" style="font-size: 1rem"></i>
        {{ data.username }}
      </span>
    </div>
    <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
      <div class="text-right ml-3">
        <span class="text-yellow-700 font-bold">изображении: 120</span>
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