<template>
  <div v-if="oneSelectImage!=null" class="col">

    <Card class="shadow-2 border-noround">
      <template #content>

        <Galleria v-model:visible="displayCustom"
                  v-model:activeIndex="oneSelectImage.index"
                  :value="detectionImages"
                  :responsiveOptions="responsiveOptions" :numVisible="7"
                  containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true"
                  :showThumbnails="false"
                  @update:activeIndex="upd"
                  @update:visible="updateVisible"
        >
          <template #header>

            <button @click="imageZoomIn" type="button" class="p-galleria-zoomin">
              <i class="pi pi-plus p-galleria-close-zoomin-icon"></i>
            </button>

            <button @click="imageZoomOut" type="button" class="p-galleria-zoomout">
              <i class="pi pi-minus p-galleria-close-zoomout-icon"></i>
            </button>

            <button @click="deleteImage" type="button" class="p-galleria-delete">
              <i class="pi pi-trash p-galleria-delete-icon"></i>
            </button>

          </template>
          <template #item="slotProps">

            <div class="container">
              <img :src="baseUrl+'/'+slotProps.item.url" alt="slotProps.item.alt" :style="{width: imageZoomSize+'vw'}"/>
              <div class="hidden" :class="{delete_checking:deleteImages.some(data=>data.id===slotProps.item.id)}">
                 <span
                     class="fas fa-download w-screen h-screen bg-black-alpha-40 align-items-center justify-content-center flex">
                <i class="text-6xl text-white  pi pi-times"></i>
              </span>
              </div>

            </div>
            <div>
            </div>
          </template>
        </Galleria>

        <Image :src="baseUrl+'/'+oneSelectImage.url" alt="Image"
               imageStyle="width: 100%; height: auto; image-rendering: -webkit-optimize-contrast;"
               @click="imageClick()"
        />

      </template>
      <template #footer>
          <span>
            {{ oneSelectImage.latitude }}
          </span>
        <span class="ml-5">
             {{ oneSelectImage.longitude }}
          </span>
      </template>
    </Card>
  </div>
</template>


<script>

import {mapState} from "vuex";

export default {
  name: "DetailImage",
  data() {
    return {
      deleteImages: [],
      index: null,
      activeIndex: null,
      imageZoomSize: 80,
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
      ],
      displayCustom: false
    };
  },
  props: {
    baseUrl: {
      type: String,
      required: true,
    }
  },
  methods: {
    imageClick() {
      this.displayCustom = true;
    },
    imageZoomIn() {
      let size = this.imageZoomSize
      this.imageZoomSize = this.clamp(size += 10, 10, 100);
    },
    imageZoomOut() {
      let size = this.imageZoomSize
      this.imageZoomSize = this.clamp(size -= 10, 10, 100);
    },

    clamp(num, min, max) {
      return num <= min
          ? min : num >= max ? max : num
    },

    deleteImage() {
      this.deleteImages.push(this.detectionImages[this.activeIndex])
    },
    upd(e) {
      this.activeIndex = e
    },
    updateVisible() {
      this.$emit("deleteImages", this.deleteImages)
      // this.$emit("deleteImages", this.deleteImages)
      // this.$emit("deleteImages", this.deleteImages)
      // this.$store.commit("detectionResultGrid/setSelectedImages", this.deleteImages)
      // this.$store.dispatch("detectionResultGrid/deleteImages")

      // let selectImage = []
      // selectImage.push(this.oneSelectImage)
      // this.deleteImages = []
      // this.$store.commit("detectionResultGrid/setSelectedImages", selectImage)
    },
  },

  watch: {
    displayCustom() {
      if (this.displayCustom === true) {
        this.activeIndex = this.oneSelectImage.index
        this.$store.commit("detectionResultGrid/setSelectedImages", [])

      } else {
        // console.log("noo")
        // this.activeIndex = null

      }
    }
  },
  computed: {
    ...mapState({
      oneSelectImage: state => state.detectionResultGrid.oneSelectImage,
      detectionImages: state => state.detectionResultGrid.detectionImages,
    }),
  },
}
</script>

<style scoped>

.delete_checking {
  display: block !important;
}

.p-galleria-zoomin {
  position: absolute;
  top: 0;
  right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  border: none;
  cursor: pointer;
  user-select: none;

  margin: 0.5rem;
  background: transparent;
  color: #f8f9fa;
  width: 4rem;
  height: 4rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
  z-index: 9999;
}

.p-galleria-close-zoomin-icon {
  font-size: 2rem;
}

.p-galleria-zoomout {
  position: absolute;
  top: 0;
  right: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  border: none;
  cursor: pointer;
  user-select: none;

  margin: 0.5rem;
  background: transparent;
  color: #f8f9fa;
  width: 4rem;
  height: 4rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
  z-index: 9999;
}

.p-galleria-close-zoomout-icon {
  font-size: 2rem;
}


.p-galleria-delete {
  position: absolute;
  top: 0;
  right: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  border: none;
  cursor: pointer;
  user-select: none;

  margin: 0.5rem;
  background: transparent;
  color: #f8f9fa;
  width: 4rem;
  height: 4rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
  z-index: 9999;
}

.p-galleria-delete-icon {
  font-size: 2rem;
}

.container {
  position: relative;
}

.container img {
  display: block;
}

.container .fa-download {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /*width: 300px;*/
  /*bottom:;*/
  /*left:0; */
}
</style>
