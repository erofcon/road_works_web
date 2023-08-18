<template>
  <div class="card">
    <TabMenu :model="items"/>
    <component v-bind:is="{...currentComponent}"/>
  </div>
</template>

<script>
import TrackerDetectionUpload from "@/components/run_detection/TrackerDetectionUpload.vue";
import XmlDetectionUpload from "@/components/run_detection/XmlDetectionUpload.vue";
import {mapState} from "vuex";

export default {
  name: "RunDetection",
  components: {XmlDetectionUpload, TrackerDetectionUpload},
  data() {
    return {
      items: [
        {
          label: 'Загрузка данных с видеорегистратора',
          command: () => this.changeComponent('TrackerDetectionUpload')
        },
        {
          label: 'Загрузка данных с мобильного приложения',
          command: () => this.changeComponent('XmlDetectionUpload'),
        },
      ],
      currentComponent: TrackerDetectionUpload,
    }
  },
  methods: {
    changeComponent(value) {
      if (value === 'XmlDetectionUpload' && this.currentComponent.name !== 'XmlDetectionUpload') {
        this.currentComponent = XmlDetectionUpload
      } else if (value === 'TrackerDetectionUpload' && this.currentComponent.name !== 'TrackerDetectionUpload') {
        this.currentComponent = TrackerDetectionUpload
      }
    }
  },
  mounted() {
    if (!this.currentUser.user.is_creator) {
      this.$router.push({name: 'notfound'});
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.authenticate.currentUser,
    }),
  }
}
</script>

<style scoped>

</style>
