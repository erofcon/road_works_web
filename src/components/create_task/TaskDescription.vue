<template>
  <div class="field my-6">
    <label for="description" class="text-lg text-gray-800">Описание задачи</label>
    <Textarea :value="description" @input="updateDescription" rows="5" id="description" class="w-full"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TaskDescription",
  methods: {
    updateDescription(e) {
      this.$store.commit('createTask/setDescription', e.target.value);
    },
  },
  computed: {
    ...mapState({
      description: state => state.createTask.description,
    }),
  },
}
</script>

<style scoped>

</style>