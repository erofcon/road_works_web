<template>
  <Card class="mx-1 my-4">
    <template #title>
      <span class="text-base">Последние задачи</span>
    </template>
    <template #content>
      <div v-if="tasks.length>0">
        <ScrollPanel style="width: 100%; height: 500px" class="custombar1">
          <OneTask
              v-if="tasks"
              class="mr-2"
              v-for="task in tasks"
              :task="task"
              :key="task.id"
          />
        </ScrollPanel>
      </div>

      <div v-else>
        <span class="text-base">список задач пуст</span>
      </div>
    </template>
  </Card>
</template>

<script>
import OneTask from "@/components/layout_components/OneTask.vue";

export default {
  name: "LastTasksList",
  components: {
    OneTask,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
  background: rgba(77, 178, 82, 1) !important;
}

::v-deep(.styled-box-red .p-ink) {
  background: rgba(248, 35, 35, 1) !important;
}

::v-deep(.styled-box-orange .p-ink) {
  background: rgba(255, 193, 6, 1) !important;
}

::v-deep(.p-scrollpanel.custombar1 .p-scrollpanel-wrapper) {
  border-right: 10px solid var(--surface-ground);
}

::v-deep(.p-scrollpanel.custombar1 .p-scrollpanel-bar) {
  background-color: var(--primary-300);
  opacity: 1;
  transition: background-color 0.3s;
}

::v-deep(.p-scrollpanel.custombar1 .p-scrollpanel-bar:hover) {
  background-color: var(--primary-400);
}

</style>
