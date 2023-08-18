<template>
  <ProgressBar v-if="loading" mode="indeterminate" style="height: 6px"></ProgressBar>

  <div v-if="task" class="grid">

    <div class="col-12">
      <div class="card">
        <h5>Изображение</h5>
        <div class="flex justify-content-center">
          <Image class="px-4" v-for="image in task.task_images" v-bind:key="image.id" :src="baseUrl+'/'+image.url"
                 alt="Image"
                 imageStyle="cursor: pointer; max-width: 250px;" preview/>
        </div>
      </div>
    </div>

    <div class="col-12 lg:col-6">
      <div v-if="taskAnswers" class="card">
        <h4>Ответы</h4>
        <div v-for="answer in taskAnswers" v-bind:key="answer.id" class="py-5 border-top-1 surface-border">

          <div class="flex align-items-center justify-content-between">
            <div class="flex align-items-center">
              <img src="https://avatars.githubusercontent.com/u/104511593?v=4"
                   class="w-3rem h-3rem flex-shrink-0 mr-3 border-circle" alt="logo">
              <div class="flex flex-column">
                <span class="text-900 font-medium mb-1 cursor-pointer">{{ answer.creator.username }}</span>
                <span
                    class="text-500 font-medium text-sm">{{
                    moment(new Date(answer.create_datetime)).format('YYYY.MM.DD')
                  }}</span>
              </div>
            </div>
            <div>
              <span class="mr-2">
                <Image class="px-1" v-for="image in answer.answer_images" v-bind:key="image.id"
                       :src="baseUrl+'/'+image.url" alt="Image Text"
                       :preview="true"
                       imageStyle="cursor: pointer; max-width: 80px;"/>
              </span>
            </div>
          </div>

          <p class="text-600 p-0 m-0 line-height-3 pt-3">{{ answer.description }}</p>
        </div>

      </div>
    </div>
    <div class="col-12 lg:col-6">
      <div class="card">
        <h4>Описание</h4>
        <div class="flex align-items-center justify-content-between my-3 md:mt-0">
          <Tag v-if="task.task_status === 'on_execution'"
               class="status bg-cyan-200 text-cyan-800 font-bold text-sm py-1 px-2">На исполнении
          </Tag>
          <Tag v-if="task.task_status === 'is_expired'"
               class="status bg-red-200 text-red-800 font-bold text-sm py-1 px-2">Просрочено
          </Tag>
          <Tag v-if="task.task_status === 'is_done'"
               class="status bg-green-200 text-green-800 font-bold text-sm py-1 px-2">Выполнено
          </Tag>
        </div>

        <p>
          {{ task.description }}
        </p>

        <h5>Ответственные</h5>
        <div class="flex align-items-center flex-column sm:flex-row">
          <Chip :label="task.task_creator.name+' '+task.task_creator.surname"
                image="https://avatars.githubusercontent.com/u/104511593?v=4"
                class="mr-2 mb-2"></Chip>
          <Chip :label="task.task_executor.name+' '+task.task_executor.surname"
                image="https://avatars.githubusercontent.com/u/104511593?v=4"
                class="mr-2 mb-2"></Chip>
        </div>

        <div class="pt-5">
          <ConfirmDialog></ConfirmDialog>
          <Button
              class="mr-5"
              @click="answerDisplay=!answerDisplay"
              v-if="task.task_status==='on_execution' && (task.task_creator.username===currentUser.user.username || task.task_executor.username===currentUser.user.username)"
              label="Добавить ответ" size="small"/>
          <Button
              @click="closeTask"
              v-if="task.task_status==='on_execution' && (task.task_creator.username===currentUser.user.username || task.task_executor.username===currentUser.user.username)"
              label="Закрыть задачу" size="small"/>
        </div>

      </div>
    </div>
  </div>

  <Dialog header="добавление ответа" v-model:visible="answerDisplay">
    <AddAnswer @closeDialog="closeDialog"/>
  </Dialog>
</template>

<script>
import {defaultApiInstance} from "@/api";
import moment from 'moment';
import {mapState} from "vuex";
import {TaskViewAPI} from "@/api/api_routes/task_view";
import AddAnswer from "@/components/task_view/AddAnswer";

export default {
  name: "TaskView",
  components:{
    AddAnswer,
  },
  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      loading: true,
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
          TaskViewAPI.closeTask(this.$route.params.id).then(() => {
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
      taskAnswers: state => state.task.taskAnswers,
      currentUser: state => state.authenticate.currentUser,
    }),
  },
  mounted() {
    this.$store.dispatch('task/getTask', {taskId: this.$route.params.id});
    this.$store.dispatch('task/getTaskAnswers', {taskId: this.$route.params.id});
    this.loading = false;
  },

}
</script>

<style scoped>

</style>
