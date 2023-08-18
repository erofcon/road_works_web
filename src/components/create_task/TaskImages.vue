<template>
  <div class="my-6">
    <FileUpload
        mode="advanced"
        chooseLabel="Прикрепить изображение"
        cancelLabel="Убрать все"
        @select="selectFile"
        @clear="clearFile"
        @remove="removeFile"
        :custom-upload="true"
        :showUploadButton="false"
        :multiple="true"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TaskImages",
  methods: {
    selectFile(event) {
      this.$store.commit('createTask/setSelectedImages', event.files)
    },
    clearFile() {
      this.$store.commit('createTask/deleteSelectedImages');
    },
    removeFile(e) {
      this.$store.commit('createTask/deleteOneSelectedImages', e.file.name);
    },
  },
  computed: {
    ...mapState({
      selectedImages: state => state.createTask.selectedImages,
    }),
  },
}
</script>

<style scoped>

</style>
