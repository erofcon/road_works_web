<template>
  <div>
    <div class="border-bottom-1 surface-border border-round pb-3">
      <span class="font-bold text-900 text-base">Ответы</span>
    </div>
    <div>
      <div v-for="answer in taskAnswers" class="py-5 border-top-1 surface-border">
        <div class="flex align-items-center justify-content-between">
          <div class="flex align-items-center">
            <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/avatars/circle/avatar-m-1.png"
                 class="w-3rem h-3rem flex-shrink-0 mr-3" alt="logo">
            <div class="flex flex-column">
              <span class="text-900 font-medium mb-1 cursor-pointer">{{ answer.creator.username }}</span>
              <span
                  class="text-500 font-medium text-sm">{{
                  moment(new Date(answer.create_datetime)).format('YYYY.MM.DD')
                }}</span>
            </div>
          </div>
          <div>
            <span class="mr-2">
              <Image class="px-1" v-for="image in answer.answer_images" :src="baseUrl+'/'+image.url" alt="Image Text"
                     :preview="true"
                     imageStyle="cursor: pointer; max-width: 80px;"/>
            </span>
          </div>
        </div>
        <p class="text-600 p-0 m-0 line-height-3 pt-3">{{ answer.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import moment from "moment";

export default {
  name: "TaskAnswer",
  props: {
    baseUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      moment: moment,
    }
  },
  computed: {
    ...mapState({
      taskAnswers: state => state.task.taskAnswers,
    }),
  },
}
</script>

<style scoped>

</style>
