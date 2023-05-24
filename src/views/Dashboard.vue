<template>
  <div class="surface-ground m-0 p-0">
    <div v-if="loading" class="flex align-items-center justify-content-center">
      <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
    </div>
    <div v-else class="container">
      <TasksStatsCard :task-statistic="taskStatistic"/>
      <LastTasksList :tasks="lastTasks"/>
    </div>
  </div>
</template>

<script>
import TasksStatsCard from "@/components/dashboard/TasksStatsCard.vue";
import LastTasksList from "@/components/dashboard/LastTasksList.vue";
import {DashboardAPi} from "@/api/api_routes/dashboard.js";
import {defaultApiInstance} from "@/api";

export default {
  name: "Dashboard",
  components: {
    TasksStatsCard,
    LastTasksList,
  },
  data() {
    return {
      loading: true,
      taskStatistic: null,
      relatedUsers: null,
      lastTasks: [],
      baseUrl: defaultApiInstance.defaults.baseURL,
    }
  },
  methods: {
    async loadPage() {
      this.loading = true;
      await DashboardAPi.getTaskStatistic().then((value => this.taskStatistic = value.data))
      await DashboardAPi.getAllRelatedUsers().then(value => this.relatedUsers = value.data)
      await DashboardAPi.getAllTasks().then(value => this.lastTasks = value.data.items)

      this.loading = false;
    }
  },
  mounted() {
    this.loadPage();
  }

}
</script>

<style scoped>

</style>
