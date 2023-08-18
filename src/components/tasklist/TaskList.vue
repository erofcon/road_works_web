<template>
  <ProgressBar v-if="loading" mode="indeterminate" style="height: 6px"></ProgressBar>
  <div v-else class="card">
    <div v-if="tasks" class="grid">
      <div class="col">
        <TaskListHead class="my-3"/>
        <OneTaskComponent
            v-for="task in tasks.items"
            :key="task.id"
            :task="task"
        />
      </div>
      <div class="col-3 hidden lg:block">
        <TaskTypeChange v-on:changeType="changeType"/>
      </div>
    </div>
  </div>
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

    const callback = (entries) => {
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
