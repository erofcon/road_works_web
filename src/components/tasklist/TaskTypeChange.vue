<template>
  <div class="p-5">
    <div class="field-radiobutton">
      <RadioButton inputId="city1" @change="$emit('changeType', this.type) " name="city" value="on_execution"
                   v-model="type"/>
      <label>Задачи на исполнении</label>
    </div>
    <div class="field-radiobutton">
      <RadioButton inputId="city2" @change="$emit('changeType', this.type)" name="city" value="is_done"
                   v-model="type"/>
      <label>Выполненые задачи</label>
    </div>
    <div class="field-radiobutton">
      <RadioButton inputId="city3" @change="$emit('changeType', this.type)" name="city" value="is_expired"
                   v-model="type"/>
      <label>Просроченные задачи</label>
    </div>
    <div class="field-radiobutton">
      <RadioButton inputId="city3" @change="$emit('changeType', this.type)" name="city" value="all_tasks"
                   v-model="type"/>
      <label>Все задачи</label>
    </div>
  </div>
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
