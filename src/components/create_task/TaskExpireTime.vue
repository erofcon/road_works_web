<template>
  <div class="my-6">
    <p class="text-lg mb-2 text-gray-800">Срок исполнения задачи*</p>
    <Calendar
        :model-value="expireDatetime"
        :showIcon="true"
        @date-select="onselectDateTime"
        :class="{'p-invalid':v$.expireDatetime.$invalid && submitted}"
        class="w-full"/>
    <small v-if="v$.expireDatetime.$invalid && submitted" class="text-red-700">выберите срок исполнения</small>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {required} from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core";


export default {
  name: "TaskExpireTime",
  setup() {
    return {v$: useVuelidate()}
  },
  props: {
    submitted: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    onselectDateTime(event) {
      this.$store.commit('createTask/setExpireDatetime', event);
    },
  },
  computed: {
    ...mapState({
      expireDatetime: state => state.createTask.expireDatetime,
    }),
  },
  validations() {
    return {
      expireDatetime: {
        required
      },
    }
  },

}
</script>

<style scoped>

</style>