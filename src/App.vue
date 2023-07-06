<template>
  <Login v-if="$route.path === '/login'"/>
  <div v-else>
    <div class="flex min-h-screen surface-ground relative">
      <AppSideBar/>
      <div class="min-h-screen flex flex-column relative flex-auto">
        <AppTopBar/>
        <div class="body">
          <router-view/>
        </div>
      </div>
    </div>
    <ThemeSideBar :theme="themeName"/>
  </div>
</template>
<script>

import SideBarMenu from "@/components/sidebar_components/SideBarMenu.vue";
import AppSideBar from "@/components/sidebar_components/AppSideBar.vue";
import AppTopBar from "@/components/AppTopBar.vue";
import Login from "@/views/Login.vue";
import ThemeSideBar from "@/components/ThemeSideBar.vue";
import Theme_service from "@/services/theme_service.js";
import {mapState} from "vuex";


const currentTheme = Theme_service.getLocalTheme();

export default {
  name: "App",
  components: {
    AppTopBar,
    AppSideBar,
    Login,
    ThemeSideBar,
    SideBarMenu,
  },
  data() {
    return {
      themeName: currentTheme ?? 'bootstrap4-light-blue',
    }
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

.body {
  max-height: 90vh;
  overflow-y: scroll;
}

:deep(.p-overlaypanel){
  padding: 0 !important;
}

:deep(.p-overlaypanel-content){
  padding: 0!important;
}


:deep(.p-galleria .p-galleria-close) {
  z-index: 9999 !important;
}

:deep(.p-galleria-close) {
  z-index: 9999 !important;
}

</style>
