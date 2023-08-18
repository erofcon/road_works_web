<template>
  <div class="min-w-full">
    <div class="field my-6">
      <label for="description" class="text-lg">Описание задачи</label>
      <Textarea :value="description" @input="updateDescription" rows="5" id="description" class="w-full"/>
    </div>

    <div class="field my-6">
      <p class="text-lg mb-2">Срок исполнения задачи</p>
      <Calendar
          :model-value="expireDatetime"
          :showIcon="true"
          @date-select="onselectDateTime"
          class="w-full"/>
    </div>

    <div class="field">
      <div class="my-4">
        <p class="text-lg mb-2">Выберите группу</p>
        <Dropdown :modelValue="selectedGroup"
                  :options="groups"
                  @change="changeGroup"
                  optionLabel="name"
                  placeholder="Выберите группу"
                  class="w-full"/>
      </div>
      <div v-if="selectedGroup">
        <p class="text-lg mb-2">Выберите исполнителя</p>
        <Dropdown :modelValue="selectedExecutor"
                  :options="relatedUsers"
                  @change="changeRelatedUser"
                  optionLabel="username"
                  placeholder="Выберите исполнителья"
                  class="w-full"/>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "EditDescription",
  methods: {
    onselectDateTime(event) {
      this.$store.commit('createTask/setExpireDatetime', event);
    },
    updateDescription(e) {
      this.$store.commit('createTask/setDescription', e.target.value);
    },
    changeGroup(event) {
      this.$store.commit('createTask/setSelectedGroup', event.value);
    },
    changeRelatedUser(event) {
      this.$store.commit('createTask/setSelectedExecutor', event.value);
    },
  },
  computed: {
    ...mapState({
      selectedGroup: state => state.createTask.selectedGroup,
      description: state => state.createTask.description,
      expireDatetime: state => state.createTask.expireDatetime,
      groups: state => state.createTask.groups,
      selectedExecutor: state => state.createTask.selectedExecutor,
      relatedUsers: state => state.createTask.relatedUsers,
    }),
  },
  watch: {
    selectedGroup() {
      this.$store.dispatch('createTask/getRelatedExecutorUsers', this.selectedGroup);
    },
  }
}
</script>

<style scoped>

</style>