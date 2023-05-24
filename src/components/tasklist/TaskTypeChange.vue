<template>
  <Card>
    <template #content>
      <div class="field-radiobutton">
        <RadioButton inputId="city1" @change="$emit('changeType', this.type) " name="city" value="on_execution"
                     v-model="type"/>
        <label for="city1">Задачи на исполнении</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="city2" @change="$emit('changeType', this.type)" name="city" value="is_done"
                     v-model="type"/>
        <label for="city2">Выполненые задачи</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="city3" @change="$emit('changeType', this.type)" name="city" value="is_expired"
                     v-model="type"/>
        <label for="city3">Просроченные задачи</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="city3" @change="$emit('changeType', this.type)" name="city" value="all_tasks"
                     v-model="type"/>
        <label for="city3">Все задачи</label>
      </div>
    </template>
  </Card>
</template>

<script>

export default {
  name: "TaskTypeChange",
  data() {
    return {
      type: null,
    }
  },
  created() {
    this.type = this.$route.params.tasks_type;
  },

}
</script>

<style scoped>

</style>
