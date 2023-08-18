<template>
  <div class="field my-6">
    <h5>Описание задачи</h5>
    <Textarea class="w-full" id="description" :value="description" @input="updateDescription" rows="5"/>
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
