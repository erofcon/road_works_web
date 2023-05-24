<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>
  <div v-else class="col xl:col-10 mx-auto my-5 container">
    <div v-if="tasks" class="grid">
      <div class="col">
        <Card>
          <template #title>
            <TaskListHead class="my-3"/>
          </template>
          <template #content>
            <OneTaskComponent
                v-for="task in tasks.items"
                :key="task.id"
                :task="task"
            />
          </template>
        </Card>
      </div>

      <div class="col-3 hidden lg:block">
        <TaskTypeChange v-on:changeType="changeType"/>
      </div>
    </div>
  </div>
  <ScrollTop class="bg-primary"/>
  <div ref="observer"></div>
</template>

<script>
import TaskListHead from "@/components/tasklist/TaskListHead.vue";
import TaskTypeChange from "@/components/tasklist/TaskTypeChange.vue";
import OneTaskComponent from "@/components/tasklist/OneTaskComponent.vue";

import {mapState} from "vuex";

export default {
  name: "TaskList",
  components: {TaskListHead, TaskTypeChange, OneTaskComponent},
  data() {
    return {
      loading: true,
      page: 0,
      type: this.$route.params.tasks_type,
    }
  },
  methods: {
    changeType(type) {
      this.loading = true;
      this.type = type;
      this.page = 0;
      this.$store.commit('taskList/clearTasks');
      this.loadingData(type);
      this.loading = false;
    },

    loadingData(type) {
      this.page += 1;

      if (type === 'on_execution') {
        this.$store.dispatch('taskList/getCurrentTasks', this.page);
      } else if (type === 'is_done') {
        this.$store.dispatch('taskList/getDoneTasks', this.page);
      } else if (type === 'is_expired') {
        this.$store.dispatch('taskList/getExpiredTasks', this.page);
      } else if (type === 'all_tasks') {
        this.$store.dispatch('taskList/getAllTasks', this.page);
      }
    },
  },
  mounted() {
    this.loadingData(this.type);
    this.loading = false;
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && !this.loading) {
        this.loadingData(this.type);
      }
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.observer)
  },
  unmounted() {
    this.$store.commit('taskList/resetStore');
  },
  computed: {
    ...mapState({
      tasks: state => state.taskList.tasks,
    }),
  },
}
</script>

<style scoped>

</style>
