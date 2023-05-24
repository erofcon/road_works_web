<template>
  <div class="col-12 sm:col-10 md:col-8 mx-auto mb-8 px-4 container">
    <RunDetectionHeader class="mb-8"/>
    <TabMenu :model="items"/>
    <component v-bind:is="{...currentComponent}"/>
  </div>
</template>

<script>
import TrackerDetectionUpload from "@/components/run_detection/TrackerDetectionUpload.vue";
import XmlDetectionUpload from "@/components/run_detection/XmlDetectionUpload.vue";
import RunDetectionHeader from "@/components/run_detection/RunDetectionHeader.vue";
import {mapState} from "vuex";

export default {
  name: "RunDetection",
  components: {RunDetectionHeader, XmlDetectionUpload, TrackerDetectionUpload},
  data() {
    return {
      items: [
        {
          label: 'Загрузка данных с мобильного приложения',
          command: () => this.changeComponent('XmlDetectionUpload'),
        },
        {
          label: 'Загрузка данных с видеорегистратора',
          command: () => this.changeComponent('TrackerDetectionUpload')
        },
      ],
      currentComponent: XmlDetectionUpload,
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
      this.$router.push({name: 'pageNotFound'});
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
