<template>

  <div @click="$router.push('/task/'+task.id)"
       :class="{'styled-box-cyan':task.task_status === 'on_execution',
      'styled-box-red':task.task_status === 'is_expired',
      'styled-box-green':task.task_status === 'is_done',
      }"
       v-ripple
       class="p-ripple  fadeindown animation-duration-200 flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 mb-3 cursor-pointer"
       style="border-radius: 10px;">
    <div class="text-900 text-black-alpha-90 font-medium">
      <div class="my-1">
        <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle">
          <i class="pi pi-file "></i>
        </span>
        <span class="font-bold text-700 text-black-alpha-90 ml-2"><span>Создано:</span>
          {{ moment(new Date(task.create_datetime)).format('DD.MM.YYYY HH:mm') }}
        </span>
      </div>
      <span class="font-medium text-black-alpha-90 text-700 p-2">
        <i class="pi pi-user-edit" style="font-size: 1rem"></i>
        {{ task.creator_username }}
      </span>
      <span class="font-medium text-black-alpha-90 text-700 p-2">
        <i class="pi pi-user" style="font-size: 0.8rem"></i>
        {{ task.executor_username }}
      </span>
    </div>
    <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
      <span v-if="task.task_status === 'on_execution'"
            class="status bg-cyan-200 text-cyan-800 font-bold text-sm py-1 px-2">На исполнении</span>
      <span v-if="task.task_status === 'is_expired'" class="status bg-red-200 text-red-800 font-bold text-sm py-1 px-2">Просрочено</span>
      <span v-if="task.task_status === 'is_done'"
            class="status bg-green-200 text-green-800 font-bold text-sm py-1 px-2">Выполнено</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';


export default {
  name: "OneTaskComponent",
  data() {
    return {
      moment: moment,
    }
  },
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.status {
  border-radius: 5px;
}

</style>
