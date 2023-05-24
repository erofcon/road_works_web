<template>
  <button @click="visibleSidebarRight=true"
          class="layout-config-button p-link flex justify-content-center align-items-center" type="button">
    <i class="pi pi-cog text-4xl p-0 m-0"></i>
  </button>

  <Sidebar v-model:visible="visibleSidebarRight" position="right">
    <div>
      <span class="font-bold text-lg">
        Темы
      </span>

      <div class="mt-4">
        <span>Bootstrap</span>
        <div class="grid mt-2">
          <div class="col-3">
            <button @click="themeName='bootstrap4-light-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/bootstrap4-light-blue.svg" class="w-3rem h-3rem" alt="Bootstrap Light Blue">
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='bootstrap4-light-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/bootstrap4-light-purple.svg" class="w-3rem h-3rem" alt="Bootstrap Light Blue">
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='bootstrap4-dark-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/bootstrap4-dark-blue.svg" class="w-3rem h-3rem" alt="Bootstrap Light Blue">
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='bootstrap4-dark-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/bootstrap4-dark-purple.svg" class="w-3rem h-3rem" alt="Bootstrap Light Blue">
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <span>Material Design</span>
        <div class="grid mt-2">
          <div class="col-3">
            <button @click="themeName='md-light-indigo'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-light-indigo.svg" class="w-3rem h-3rem" alt="Material Light Indigo"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='md-light-deeppurple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-light-deeppurple.svg" class="w-3rem h-3rem" alt="Material Light DeepPurple"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='md-dark-indigo'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-dark-indigo.svg" class="w-3rem h-3rem" alt="Material Dark Indigo"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='md-dark-deeppurple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-dark-deeppurple.svg" class="w-3rem h-3rem" alt="Material Dark DeepPurple"/>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <span>Material Design Compact</span>

        <div class="grid mt-2">
          <div class="col-3">
            <button @click="themeName='mdc-light-indigo'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-light-indigo.svg" class="w-3rem h-3rem" alt="Material Light Indigo"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='mdc-light-deeppurple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-light-deeppurple.svg" class="w-3rem h-3rem"
                   alt="Material Light Deep Purple"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='mdc-dark-indigo'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-dark-indigo.svg" class="w-3rem h-3rem" alt="Material Dark Indigo"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='mdc-dark-deeppurple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/md-dark-deeppurple.svg" class="w-3rem h-3rem" alt="Material Dark Deep Purple"/>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <span>Tailwind</span>
        <div class="grid mt-2">
          <div class="col-3">
            <button @click="themeName='tailwind-light'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/tailwind-light.png" class="w-3rem h-3rem" alt="Tailwind Light"/>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <span>Fluent UI</span>
        <div class="grid mt-2">
          <div class="col-3">
            <button @click="themeName='fluent-light'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/fluent-light.png" class="w-3rem h-3rem" alt="Fluent Light"/>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <span>PrimeOne Design</span>
        <div class="grid mt-4">
          <div class="col-3">
            <button @click="themeName='lara-light-indigo'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-light-indigo.png" class="w-3rem h-3rem" alt="Lara Light Indigo"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-light-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-light-blue.png" class="w-3rem h-3rem" alt="Lara Light Blue"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-light-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-light-purple.png" class="w-3rem h-3rem" alt="Lara Light Purple"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-light-teal'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-light-teal.png" class="w-3rem h-3rem" alt="Lara Light Teal"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-dark-indigo'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-dark-indigo.png" class="w-3rem h-3rem" alt="Lara Dark Indigo"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-dark-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-dark-blue.png" class="w-3rem h-3rem" alt="Lara Dark Blue"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-dark-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-dark-purple.png" class="w-3rem h-3rem" alt="Lara Dark Purple"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='lara-dark-teal'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/lara-dark-teal.png" class="w-3rem h-3rem" alt="Lara Dark Teal"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='saga-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/saga-blue.png" class="w-3rem h-3rem" alt="Saga Blue"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='saga-green'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/saga-green.png" class="w-3rem h-3rem" alt="Saga Green"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='saga-orange'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/saga-orange.png" class="w-3rem h-3rem" alt="Saga Orange"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='saga-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/saga-purple.png" class="w-3rem h-3rem" alt="Saga Purple"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='vela-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/vela-blue.png" class="w-3rem h-3rem" alt="Vela Blue"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='vela-green'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/vela-green.png" class="w-3rem h-3rem" alt="Vela Green"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='vela-orange'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/vela-orange.png" class="w-3rem h-3rem" alt="Vela Orange"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='vela-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/vela-purple.png" class="w-3rem h-3rem" alt="Vela Purple"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='arya-blue'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/arya-blue.png" class="w-3rem h-3rem" alt="Arya Blue"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='arya-green'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/arya-green.png" class="w-3rem h-3rem" alt="Arya Green"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='arya-orange'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/arya-orange.png" class="w-3rem h-3rem" alt="Arya Orange"/>
            </button>
          </div>
          <div class="col-3">
            <button @click="themeName='arya-purple'" class="p-link w-3rem h-3rem">
              <img src="@/assets/themes/arya-purple.png" class="w-3rem h-3rem" alt="Arya Purple"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Sidebar>

</template>

<script>
import Theme_service from "@/services/theme_service.js";

export default {
  name: "ThemeSideBar",
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      themeNames: [
        'bootstrap4-light-blue',
        'bootstrap4-light-purple',
        'bootstrap4-dark-blue',
        'bootstrap4-dark-purple',

        'md-light-indigo',
        'md-light-deeppurple',
        'md-dark-indigo',
        'md-dark-deeppurple',

        'mdc-light-indigo',
        'mdc-light-deeppurple',
        'mdc-dark-indigo',
        'mdc-dark-deeppurple',

        'tailwind-light',

        'fluent-light',

        'lara-light-indigo',
        'lara-dark-indigo',
        'lara-light-purple',
        'lara-dark-purple',
        'lara-light-blue',
        'lara-dark-blue',
        'lara-light-teal',
        'lara-dark-teal',
        'saga-blue',
        'saga-green',
        'saga-orange',
        'saga-purple',
        'vela-blue',
        'vela-green',
        'vela-orange',
        'vela-purple',
        'arya-blue',
        'arya-green',
        'arya-orange',
        'arya-purple',
      ],
      themeName: "",
      loadedThemes: {},
      visibleSidebarRight: false,
    }
  },
  methods: {
    loadTheme(newName, oldName) {
      if (newName !== "" && newName !== oldName) {
        if (oldName !== "" && this.loadedThemes[oldName]) {
          document.head.removeChild(this.loadedThemes[oldName]);
        }
        if (this.loadedThemes[newName]) {
          document.head.appendChild(this.loadedThemes[newName])
        } else {
          this.setupCallback()
          import( /* @vite-ignore */ '../assets/layout/styles/theme/' + newName + '/theme.css')
        }
      }
    },
    callback(list, observer) {
      for (const mutation of list) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (mutation.target === document.head && node.nodeName === "STYLE") {
              this.loadedThemes[this.themeName] = node
              this.tearDownCallback();
            }
          })
        }
      }
    },
    setupCallback() {
      const config = {
        attributes: true,
        childList: true,
        subtree: true,
      };
      this.observer = new MutationObserver(this.callback);
      this.observer.observe(document.head, config);
    },
    tearDownCallback() {
      this.observer.disconnect()
    },
  },
  watch: {
    themeName(newName) {
      this.loadTheme(newName);
      Theme_service.setTheme(newName);
    }
  },
  mounted() {
    this.themeName = this.$props.theme;
  },
}
</script>

<style scoped>
.layout-config-button {
  display: block;
  position: fixed;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  background: var(--primary-color);
  color: var(--primary-color-text);
  text-align: center;
  top: 50%;
  right: 0;
  margin-top: -1.5rem;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  z-index: 999;
  box-shadow: -0.25rem 0 1rem #00000026;
}
</style>
