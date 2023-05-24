<template>
  <Galleria
      :value="task.task_images"
      v-model:activeIndex="activeIndex"
      :responsiveOptions="responsiveOptions"
  >
    <template #item="slotProps">
      <Image :src="baseUrl+'/'+slotProps.item.url" alt="Image" imageStyle="width: 100%; display: block" preview/>
    </template>
    <template #thumbnail="slotProps">
      <img :src="baseUrl+'/'+slotProps.item.url" :alt="slotProps.item.alt" class="img-thumbnail"/>
    </template>
  </Galleria>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TaskImages",
  props: {
    baseUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      displayCustom: false,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    }
  }, methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
    }
  },
  computed: {
    ...mapState({
      task: state => state.task.task,
    }),
  },
}
</script>

<style scoped>

.img-thumbnail {
  width: 100px;
}


</style>
