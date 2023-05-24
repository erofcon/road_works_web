<template>
  <div>
    <div class="my-4">
      <p class="text-lg mb-2 text-gray-800">Выберите группу*</p>
      <Dropdown v-model="group"
                :options="groups"
                optionLabel="name"
                placeholder="Выберите группу"
                :class="{'p-invalid':v$.selectedGroup.$invalid && submitted}"
                class="w-full"/>
      <small v-if="v$.selectedGroup.$invalid && submitted" class="text-red-700">выберите группу</small>
    </div>
    <div v-if="group">
      <p class="text-lg mb-2 text-gray-800">Выберите исполнителя*</p>
      <Dropdown v-model="executor"
                :options="relatedUsers"
                optionLabel="username"
                placeholder="Выберите исполнителья"
                :class="{'p-invalid':v$.selectedExecutor.$invalid && submitted}"
                class="w-full"/>
      <small v-if="v$.selectedExecutor.$invalid && submitted" class="text-red-700">выберите исполнителья</small>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {required} from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core";

export default {
  name: "TaskGroupAndExecutor",
  setup() {
    return {v$: useVuelidate()}
  },
  props: {
    submitted: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      group: null,
      executor: null,
    }
  },
  computed: {
    ...mapState({
      groups: state => state.createTask.groups,
      relatedUsers: state => state.createTask.relatedUsers,
      selectedGroup: state => state.createTask.selectedGroup,
      selectedExecutor: state => state.createTask.selectedExecutor,
    }),
  },
  watch: {
    group() {
      this.executor = null;
      this.$store.commit('createTask/deleteSelectedExecutor');
      this.$store.commit('createTask/setSelectedGroup', this.group);
      this.$store.dispatch('createTask/getRelatedExecutorUsers', this.group);
    },
    executor() {
      this.$store.commit('createTask/setSelectedExecutor', this.executor);
    }
  },
  validations() {
    return {
      selectedGroup: {
        required
      },
      selectedExecutor: {
        required
      },
    }
  },
}
</script>

<style scoped>

</style>