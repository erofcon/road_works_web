<template>
  <form @submit.prevent="createAnswer">
    <div class="field my-6">
      <label for="description" class="text-lg">Описание</label>
      <Textarea v-model="description" rows="5" id="description" class="w-full"/>
    </div>
    <FileUpload
        mode="advanced"
        chooseLabel="Прикрепить изображение"
        cancelLabel="Убрать все"
        @select="selectFile"
        @clear="clearFile"
        @remove="removeFile"
        :custom-upload="true"
        :showUploadButton="false"
        :multiple="true"
        accept="image/*"/>
    <span v-if="inputError" class="text-red-500 block mt-4">*введите описание или выберите изображение</span>
    <Button label="отправить" type="submit" class="mt-5"/>
  </form>
</template>

<script>
import {TaskViewAPI} from "@/api/api_routes/task_view.js";

export default {
  name: "AddAnswer",
  data() {
    return {
      description: '',
      selectedImages: null,
      inputError: false,
    }
  },
  methods: {
    createAnswer() {
      this.inputError = false;

      if (this.description === '' && this.selectedImages === null) {
        this.inputError = true;
      } else {

        TaskViewAPI.createAnswer(this.description, this.selectedImages, this.$route.params.id).then(value => {
          this.$store.commit('task/appendTaskAnswer', value.data);
          this.$emit('closeDialog')
          this.$toast.add({severity: 'success', detail: 'ответ успешно добавлен', life: 3000});
        }, reason => {
          console.log(reason)
        })
      }
    },

    selectFile(event) {
      this.selectedImages = event.files;
    },
    clearFile(e) {
      this.selectedImages = null;
    },
    removeFile(e) {
      this.selectedImages = null;
    },
  }
}
</script>

<style scoped>

</style>
