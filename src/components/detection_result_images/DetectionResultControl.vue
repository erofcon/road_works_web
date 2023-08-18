<template>
  <Toast/>
  <div class="fixed bottom-0 min-w-full border-round surface-overlay" style="">
    <div class="flex p-3 align-items-center justify-content-center">
      <div>
        <Button :badge="selectedImage.length.toString()" badgeClass="p-badge-danger" label="Отправить"
                @click="createTask" class="p-button-sm p-button-text p-button-success"
                :disabled="sendingTask"/>
        <Button label="Удалить" @click="deleteImg" class="p-button-sm p-button-text p-button-danger"
                :disabled="deletingImg"/>
        <Button label="Редактировать" @click="editDialog=!editDialog" class="p-button-sm p-button-text"/>
      </div>
    </div>
  </div>
  <Dialog header="Редактирование" v-model:visible="editDialog">
    <EditDescription/>
  </Dialog>
</template>

<script>
import convertURLtoFile from "@/components/helpers/convert_url_to_file";
import {mapState} from "vuex";
import EditDescription from "@/components/detection_result_images/EditDescription";

export default {
  name: "DetectionResultControl",
  components: {EditDescription},
  props: {
    baseUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editDialog: false,
      sendingTask: false,
      deletingImg: false,
      sendingFiles: [],
    }
  },
  methods: {
    async createTask() {
      if (!this.selectedGroup || !this.selectedExecutor || !this.expireDatetime) {
        this.$toast.add({severity: 'error', summary: 'Ошибка', detail: 'обязательные поля не заполнены', life: 3000});
      } else if (!this.selectedImage.length > 0) {
        this.$toast.add({severity: 'error', summary: 'Ошибка', detail: 'изображение не выбрано', life: 3000});
      } else {
        this.sendingFiles = [];
        this.sendingTask = true;
        for (const i in this.selectedImage) {
          const url = this.baseUrl + '/' + this.selectedImage[i].url;
          await convertURLtoFile(url).then(value => {
            this.sendingFiles.push(value);
          })
        }

        const location = {
          lat: this.selectedImage[0].latitude,
          lng: this.selectedImage[0].longitude,
        };

        this.$store.commit('createTask/setLocation', location);

        this.$store.commit('createTask/setSelectedImages', this.sendingFiles);
        this.$store.dispatch('createTask/creatTask').then(
            () => {
              this.$toast.add({severity: 'success', summary: 'Успех', detail: 'задача успешно создана', life: 3000});
            }, () => {
              this.$toast.add({
                severity: 'error',
                summary: 'ошибка',
                detail: 'произошла ошибка при создании задачи',
                life: 3000
              });
            }
        );
        this.$store.dispatch('detectionResultGrid/deleteImages');
        this.sendingTask = false;
      }
    },
    deleteImg() {
      if (!this.selectedImage.length > 0) {
        this.$toast.add({severity: 'error', summary: 'Ошибка', detail: 'изображение не выбрано', life: 3000});
      } else {
        this.deletingImg = true;
        this.$store.dispatch('detectionResultGrid/deleteImages').then(
            // value => {
            //   // this.$toast.add({
            //   //   severity: 'success',
            //   //   summary: 'Успех',
            //   //   detail: 'изображение успешно удалено',
            //   //   life: 3000
            //   // });
            // },
            // reason => {
            //   // this.$toast.add({
            //   //   severity: 'error',
            //   //   summary: 'Ошибка',
            //   //   detail: 'Ошибка удаления изображения',
            //   //   life: 3000
            //   // });
            // }
        );
        // this.$emit('deleteImg');
        this.deletingImg = false;
      }
    },
  },
  computed: {
    ...mapState({
      selectedImage: state => state.detectionResultGrid.selectedImage,
      selectedGroup: state => state.createTask.selectedGroup,
      expireDatetime: state => state.createTask.expireDatetime,
      selectedExecutor: state => state.createTask.selectedExecutor,
    }),
  },
}
</script>

<style scoped>

</style>
