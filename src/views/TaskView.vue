<template>
  <div>
    <div v-if="loading" class="flex align-items-center justify-content-center">
      <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
    </div>
    <Card v-else-if="task!==null" class="my-4 container scalein">
      <template #content>
        <div class="grid">
          <div v-if="task.task_images.length>0" class="col-12 lg:col-6">
            <TaskImages :base-url="baseUrl"/>
          </div>
          <div class="col-12 lg:col-6 lg:pl-6">
            <AboutTask/>
          </div>
        </div>
      </template>

      <template #footer>
        <TaskAnswer :base-url="baseUrl" class="my-6"/>
      </template>

    </Card>
  </div>
  <ScrollTop class="bg-primary"/>
</template>

<script>
import TaskImages from "@/components/task_view/TaskImages.vue";
import AboutTask from "@/components/task_view/AboutTask.vue";
import TaskAnswer from "@/components/task_view/TaskAnswer.vue";
import {defaultApiInstance} from "@/api";
import moment from 'moment';
import {mapState} from "vuex";


export default {
  name: "TaskView",
  components: {
    TaskImages,
    AboutTask,
    TaskAnswer,
  },
  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      loading: true,
      moment: moment,
    }
  },
  computed: {
    ...mapState({
      task: state => state.task.task,
      taskAnswers: state => state.task.taskAnswers,
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
