<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>
  <div v-else class="col-12 sm:col-10 md:col-8 mx-auto mb-8 px-4 container">
    <TaskHeader/>

    <form @submit.prevent="createTask(!v$.$invalid)">
      <TaskDescription/>
      <TaskLocation/>
      <TaskExpireTime :submitted="submitted"/>
      <TaskGroupAndExecutor :submitted="submitted"/>
      <TaskImages/>
      <Button label="отправить" type="submit"/>
    </form>
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
import {mapState} from "vuex";
import TaskHeader from "@/components/create_task/TaskHeader.vue";
import TaskDescription from "@/components/create_task/TaskDescription.vue";
import TaskLocation from "@/components/create_task/TaskLocation.vue";
import TaskExpireTime from "@/components/create_task/TaskExpireTime.vue";
import TaskGroupAndExecutor from "@/components/create_task/TaskGroupAndExecutor.vue";
import TaskImages from "@/components/create_task/TaskImages.vue";

import useVuelidate from "@vuelidate/core";

import {createTask} from "../store/modules/create_task.js";

export default {
  name: "CreateTask",
  components: {
    TaskHeader,
    TaskDescription,
    TaskLocation,
    TaskExpireTime,
    TaskGroupAndExecutor,
    TaskImages,
  },
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      loading: true,
      submitted: false,
      dialogDisplay: false,

    };
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
      console.log("noo men")
      // this.$router.push({name: 'pageNotFound'});
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
