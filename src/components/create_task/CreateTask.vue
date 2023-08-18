<template>
  <ProgressBar v-if="loading" mode="indeterminate" style="height: 6px"></ProgressBar>
  <div v-else class="">
    <div class="card">
      <form @submit.prevent="createTask(!v$.$invalid)">
        <TaskDescription/>
        <TaskLocation/>
        <TaskExpireTime :submitted="submitted"/>
        <TaskGroupAndExecutor :submitted="submitted"/>
        <TaskImages/>
        <Button label="отправить" type="submit"/>
      </form>
    </div>
  </div>
  <Dialog position="top" v-model:visible="dialogDisplay" class="w-4">
    <div class="flex align-items-center flex-column pt-6 px-3">
      <i class="pi pi-check-circle" style="font-size: 5rem; color: var(--green-500);"></i>
      <h5>Задача создано успешно!</h5>
    </div>
    <template #footer>
      <div class="flex justify-content-center">
        <Button label="OK" @click="dialogDisplay=!dialogDisplay" class="p-button-text"/>
      </div>
    </template>
  </Dialog>

</template>

<script>
import useVuelidate from "@vuelidate/core";

import {mapState} from "vuex";

import TaskDescription from "@/components/create_task/TaskDescription";
import TaskLocation from "@/components/create_task/TaskLocation";
import TaskExpireTime from "@/components/create_task/TaskExpireTime";
import TaskGroupAndExecutor from "@/components/create_task/TaskGroupAndExecutor";
import TaskImages from "@/components/create_task/TaskImages";

export default {
  name: "CreateTask",
  setup() {
    return {v$: useVuelidate()}
  },
  components: {
    TaskDescription,
    TaskLocation,
    TaskExpireTime,
    TaskGroupAndExecutor,
    TaskImages
  },
  data() {
    return {
      loading: true,
      submitted: false,
      dialogDisplay: false,
    }
  },
  methods: {
    loadingPage() {
      this.$store.dispatch('createTask/getRelatedGroups');
      if (this.selectedGroupId) {
        this.$store.dispatch('createTask/getRelatedExecutorUsers', this.selectedGroupId);
      }
      this.loading = false;
    },

    createTask(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.$store.dispatch('createTask/creatTask').then(
            () => {
              this.dialogDisplay = true;
            }, () => {
              // this.create_error = true;
            }
        );
        this.submitted = false;
      }
    },
  },

  mounted() {
    if (!this.currentUser.user.is_creator) {
      this.$router.push({name: 'notfound'});
    } else {
      this.loadingPage();
    }
  },
  unmounted() {
    this.$store.commit('createTask/resetStore');
  },
  computed: {
    ...mapState({
      selectedGroupId: state => state.createTask.selectedGroupId,
      currentUser: state => state.authenticate.currentUser,
    }),
  }
}
</script>

<style scoped>

</style>
