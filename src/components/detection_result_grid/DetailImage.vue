<template>
  <div v-if="oneSelectImage!=null" class="col">
    <Card class="shadow-2 border-noround">
      <template #content>
        <Galleria v-model:activeIndex="oneSelectImage.index" v-model:visible="displayCustom" :value="detectionImages"
                  :responsiveOptions="responsiveOptions" :numVisible="7"
                  containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true"
                  :showThumbnails="false">
          <template #header>

            <button @click="imageZoomIn" type="button" class="p-galleria-zoomin">
              <i class="pi pi-plus p-galleria-close-zoomin-icon"></i>
            </button>

            <button @click="imageZoomOut" type="button" class="p-galleria-zoomout">
              <i class="pi pi-minus p-galleria-close-zoomout-icon"></i>
            </button>

          </template>
          <template #item="slotProps">
            <img :src="baseUrl+'/'+slotProps.item.url" alt="slotProps.item.alt" :style="{width: imageZoomSize+'vw'}"/>
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
import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'

export default {
  name: "DetailImage",
  components: {
    vuePhotoZoomPro,
  },
  data() {
    return {
      images: null,
      activeIndex: 0,
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
</style>
