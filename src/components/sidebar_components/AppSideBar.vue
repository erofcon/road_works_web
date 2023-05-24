<template>
  <div v-if="sidebarVisible">
    <div
        class="surface-section h-screen lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none hidden w-18rem">
      <div class="flex h-full flex-column">
        <div class="overflow-y-auto">
          <SideBarMenu/>
        </div>
      </div>
    </div>

    <Sidebar v-model:visible="sideBarVisibleLeft" @hide="hide" position="left">
      <SideBarMenu/>
    </Sidebar>

  </div>
</template>

<script>
import SideBarMenu from "@/components/sidebar_components/SideBarMenu.vue";
import {mapState} from "vuex";
import store from "@/store/index.js";

export default {
  name: "AppSideBar",
  components: {SideBarMenu},
  data() {
    return {
      sideBarVisibleLeft: false,
    }
  },
  methods: {
    hide() {
      store.state.sidebar.sidebarVisible = this.sideBarVisibleLeft
    }
  },
  watch: {
    sidebarVisible() {
      if (screen.width <= 991) {
        this.sideBarVisibleLeft = this.sidebarVisible
      }
    },
  },
  computed: {
    ...mapState(
        {
          sidebarVisible: state => state.sidebar.sidebarVisible,
        }
    )
  },
}
</script>

<style scoped>

</style>
