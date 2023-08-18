<template>
  <div>
    <form @submit.prevent="upload(!v$.$invalid)">
      <div class="field my-6">
        <h5>Описание</h5>
        <Textarea v-model="description" rows="5" id="description" class="w-full"/>
      </div>

      <div class="my-5">
        <h5 class="">Видео файл*</h5>
        <FileUpload
            mode="advanced"
            chooseLabel="Прикрепить файл"
            cancelLabel="Убрать все"
            @select="selectVideoFile"
            @clear="clearVideFile"
            @remove="clearVideFile"
            :custom-upload="true"
            :showUploadButton="false"
            accept="video/*"
        />
        <small v-if="v$.videoFile.$invalid && submitted" class="text-red-700">выберите видео файл</small>
      </div>
      <div class="field my-6">
        <h5>Время начала видео*</h5>
        <Calendar
            class="w-12"
            v-model="startDatetime"
            :showTime="true"
            :showSeconds="true"
            :class="{'p-invalid':v$.startDatetime.$invalid && submitted}"
        />
        <small v-if="v$.startDatetime.$invalid && submitted" class="text-red-700">введите дату</small>
      </div>

      <ProgressBar v-if="sending" class="my-5" :value="uploadProgress"/>
      <Button v-else label="отправить" type="submit" class="mt-3"/>
    </form>
  </div>

  <Dialog position="top" v-model:visible="dialogDisplay" class="w-4">
    <div class="flex align-items-center flex-column py-5 px-3">
      <i class="pi pi-check-circle" style="font-size: 5rem; color: var(--green-500);"></i>
      <h5 class="mt-4">Файлы успешно загружены!</h5>
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

import {required} from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core";
import {RunDetectionAPI} from "@/api/api_routes/run_detection.js";


export default {
  name: "TrackerDetectionUpload",
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      description: '',
      videoFile: null,
      startDatetime: null,
      submitted: false,
      sending: false,
      dialogDisplay: false,
    }
  },
  methods: {
    selectVideoFile(event) {
      this.videoFile = event.files[0];
    },
    clearVideFile() {
      this.videoFile = null;
    },
    onselectDateTime(event) {
      this.startDatetime = event;
    },
    upload(isFormValid) {
      this.submitted = true;

      if (isFormValid) {
        this.sending = true;

        RunDetectionAPI.runDetectionWithTracker(this.description, this.videoFile, this.startDatetime).then(() => {
          this.sending = false;
          this.submitted = false;
          this.dialogDisplay = true;
        }).catch(() => {
          console.log('error')
        });
      }
    }
  },
  computed: {
    ...mapState(
        {
          uploadProgress: state => state.runDetection.uploadProgress,
        }
    )
  },
  validations() {
    return {
      videoFile: {
        required
      },
      startDatetime: {
        required
      },
    }
  },
}
</script>

<style scoped>

</style>
