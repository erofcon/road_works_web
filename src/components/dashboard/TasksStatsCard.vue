<template>
  <div class="grid m-0 p-0">
    <!--    -->
    <div class="col-12 md:col-6 lg:col-4 xl:col">
      <Card  class="p-ripple shadow-2 p-3 pr-5 mx-1 styled-box-green">
        <template #header>
          <span class="text-700 font-medium pl-4">Выполненные задачи</span>
        </template>
        <template #title>
          <span>{{ taskStatistic.done_tasks }}</span>
        </template>
        <template #footer>
          <Button @click="$router.push('/task_list/is_done')" class="p-1" aria-label="open">
            <i class="pi pi-external-link px-1"></i>
            <span class="px-2">открыть</span>
          </Button>
        </template>
      </Card>
    </div>
    <!--    -->

    <div class="col-12 md:col-6 lg:col-4 xl:col">
      <Card class="p-ripple shadow-2 p-3 pr-5 mx-1 styled-box-red">
        <template #header>
          <span class="text-700 font-medium pl-4">Просроченные задачи</span>
        </template>
        <template #title>
          <span>{{ taskStatistic.expired_tasks }}</span>
        </template>
        <template #footer>
          <Button @click="$router.push('/task_list/is_expired')"  class="p-1" aria-label="open">
            <i class="pi pi-external-link px-1"></i>
            <span class="px-2">открыть</span>
          </Button>
        </template>
      </Card>
    </div>
    <!-- -->

    <div class="col-12 md:col-6 lg:col-4 xl:col">
      <Card  class="p-ripple shadow-2 p-3 pr-5 mx-1  styled-box-orange">
        <template #header>
          <span class="text-700 font-medium pl-4">Задачи на исполнении</span>
        </template>
        <template #title>
          <span>{{ taskStatistic.current_tasks }}</span>
        </template>
        <template #footer>
          <Button @click="$router.push('/task_list/on_execution')" class="p-1" aria-label="open">
            <i class="pi pi-external-link px-1"></i>
            <span class="px-2">открыть</span>
          </Button>
        </template>
      </Card>
    </div>

    <!--    -->

    <div class="col-12 md:col-6 lg:col-4 xl:col">
      <Card  class="p-ripple shadow-2 p-3 pr-5 mx-1  styled-box-blue">
        <template #header>
          <span class="text-700 font-medium pl-4">Все задачи</span>
        </template>
        <template #title>
          <span>{{ taskStatistic.all_tasks }}</span>
        </template>
        <template #footer>
          <Button @click="$router.push('/task_list/all_tasks')" class="p-1" aria-label="open">
            <i class="pi pi-external-link px-1"></i>
            <span class="px-2">открыть</span>
          </Button>
        </template>
      </Card>
    </div>

    <!--        -->

  </div>

</template>

<script>
export default {
  name: "TasksStatsCard",
  props: {
    taskStatistic: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
