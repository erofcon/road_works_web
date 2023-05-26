<template>
  <ConfirmDialog></ConfirmDialog>
  <div>
    <div class="flex align-items-center text-lg font-medium text-800 mb-1">
      <span>Описание задачи</span>
      <Button icon="pi pi-print" class="ml-2"
              severity="secondary" text rounded/>
    </div>

    <div class="flex align-items-center pt-3 pb-2 flex-wrap">
      <div class="text-500 w-full md:w-3 font-medium">дата создания</div>
      <div class="text-900 w-full md:w-5 font-medium">
        {{ moment(new Date(task.create_datetime)).format('DD.MM.YYYY HH:mm') }}
      </div>
    </div>

    <div class="flex align-items-center pb-4 flex-wrap">
      <div class="text-500 w-full md:w-3 font-medium">срок исполнения</div>
      <div class="text-900 w-full md:w-5 font-medium">{{
          moment(new Date(task.lead_datetime)).format('DD.MM.YYYY HH:mm')
        }}
      </div>
    </div>

    <div class="font-normal text-900 mb-3">{{ task.description }}</div>
    <div class="font-medium text-500 mb-3">статус</div>

    <div v-if="task.task_status === 'is_done'" class="flex align-items-center mb-5">
      <i class="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-2 border-2 surface-border transition-all transition-duration-300"></i>
      <span class="font-medium text-900">выполнено</span>
    </div>

    <div v-if="task.task_status === 'on_execution'" class="flex align-items-center mb-5">
      <i class="w-2rem h-2rem flex-shrink-0 border-circle bg-primary-500 mr-2 border-2 surface-border transition-all transition-duration-300"></i>
      <span class="font-medium text-900">на исполнении</span>
    </div>

    <div v-if="task.task_status === 'is_expired'" class="flex align-items-center mb-5">
      <i class="w-2rem h-2rem flex-shrink-0 border-circle bg-red-500 mr-2 border-2 surface-border transition-all transition-duration-300"></i>
      <span class="font-medium text-900">просрочено</span>
    </div>


    <div class="grid">
      <div class="col">
        <div
            class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
          <i class="pi pi-user-edit text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
          <div>
            <div class="text-900 font-medium mb-1">{{ task.task_creator.username }}</div>
            <span class="text-600 text-sm hidden md:block">Куратор</span></div>
        </div>
      </div>
      <div class="col">
        <div
            class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
          <i class="pi pi-user text-600 text-2xl md:text-3xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
          <div>
            <div class="text-900 font-medium mb-1">{{ task.task_executor.username }}</div>
            <span class="text-600 text-sm hidden md:block">Исполнитель</span></div>
        </div>
      </div>
    </div>


    <div class="mt-5">
      <Button
          v-if="task.task_status==='on_execution' && (task.task_creator.id===currentUser.user.id || task.task_executor.id===currentUser.user.id)"
          @click="answerDisplay=!answerDisplay"
          label="Добавить ответ" class="md:w-14rem mr-4 p-button-sm"/>
      <Button
          v-if="task.task_status==='on_execution' && currentUser.user.is_creator && task.task_creator.id===currentUser.user.id"
          @click="closeTask"
          label="Закрыть задачу" class="md:w-14rem mt-2 p-button-sm"/>
    </div>

    <Dialog header="добавление ответа" v-model:visible="answerDisplay">
      <AddAnswer @closeDialog="closeDialog"/>
    </Dialog>
  </div>

</template>

<script>
import {mapState} from "vuex";
import moment from "moment";
import {TaskViewAPI} from "@/api/api_routes/task_view.js";
import AddAnswer from "./AddAnswer.vue";

export default {
  name: "AboutTask",
  components: {AddAnswer},
  data() {
    return {
      moment: moment,
      answerDisplay: false,
    }
  },
  methods: {
    closeDialog() {
      this.answerDisplay = false;
    },
    closeTask() {
      this.$confirm.require({
        message: 'Вы действительно хотите закрыть задачу?',
        header: ' ',
        icon: 'pi pi-exclamation-triangle text-yellow-500',
        acceptLabel: 'Да',
        rejectLabel: 'Нет',
        accept: () => {
          TaskViewAPI.closeTask(this.$route.params.id).then(value => {
            this.$store.commit('task/changeTaskStatus');
            this.$toast.add({severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
          })
        },
      });
    },
  },
  computed: {
    ...mapState({
      task: state => state.task.task,
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>

</style>
