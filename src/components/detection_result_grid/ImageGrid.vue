<template>
  <div class="col">
    <div class="grid flex justify-content-center">
      <div v-for="img in images" :key="img.id" class="col-6">
        <Card :class="{card_checked:selectImg.some(data=>data.id===img.id)}"
              class="shadow-2 border-noround">
          <template #header>
            <div class="flex justify-content-end col">
              <input type="checkbox" class="cursor-pointer" v-bind:value="img" v-model="selectImg">
            </div>
          </template>
          <template #content>
            <img @click=selectOneImg(img)
                 :src="baseUrl+'/'+img.url" class="cursor-pointer p-1" alt="img">
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ImageGrid",
  props: {
    baseUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectImg: [],
    }
  },
  methods: {
    selectOneImg(img) {
      this.selectImg = [];
      this.selectImg.push(img);
      this.$store.commit('detectionResultGrid/setSelectOneSelectImage', img);
    }
  },
  computed: {
    ...mapState({
      images: state => state.detectionResultGrid.detectionImages,
    }),
  },
  watch: {
    selectImg() {
      this.$store.commit('detectionResultGrid/setSelectedImages', this.selectImg);
      if (this.selectImg.length === 0) {
        this.$store.commit('detectionResultGrid/deleteSelectOneSelectImage');
      }
    }
  },
}
</script>

<style scoped>
img {
  width: 100%;
}

.card_checked {
  transition: 0.1s;
  border: rgba(44, 71, 187, 1) solid 3px;
}

:deep(.p-card-body) {
  padding: 0!important;
}

:deep(.p-card-content) {
  padding: 0!important;
}

/*::v-deep(.p-card) {*/
/*  .p-card-body {*/
/*    padding: 0;*/
/*  }*/

/*  .p-card-content {*/
/*    padding: 0;*/
/*  }*/
/*}*/


</style>
