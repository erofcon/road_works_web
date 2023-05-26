<template>
  <div
      class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static h-4rem">
    <Button @click="changeSidebarState()"
            :icon="'pi pi-align-justify'"
            severity="secondary" text rounded aria-label="sidebar"/>
    <ul class="list-none p-0 m-0 flex align-items-center">
      <li>
        <Button icon="pi pi-bell"
                severity="secondary" text rounded/>
      </li>
      <li>
        <Avatar class="cursor-pointer" @click="userToggle"
                image="https://avatars.githubusercontent.com/u/104511593?v=4"
                shape="circle"/>
      </li>
    </ul>

    <OverlayPanel ref="popup">
      <div class="p-0">
       <span class="border-bottom-1 border-gray-300 px-3 pb-2">
        Вы вошли как <span class="font-bold">{{ currentUser.user.username }}</span>
      </span>
        <nav class="mt-4 mb-2">
          <ul>
            <li class="text-black-alpha-90 block hover:bg-gray-200 px-3 py-2 cursor-pointer">
              <div class="flex align-items-center">
                <i class="pi pi-cog"></i>
                <span class="pl-1">настройки</span>
<!--                <span @click="$router.push('/settings')" class="pl-1">настройки</span>-->
              </div>
            </li>
            <li @click="logout" class="text-black-alpha-90 block hover:bg-gray-200 px-3 py-2 cursor-pointer">
              <div class="flex align-items-center">
                <i class="pi pi-sign-out text-sm"></i>
                <span class="pl-1">выход</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </OverlayPanel>

  </div>
</template>

<script>
import store from "../store/index.js";
import {mapState} from "vuex";

export default {
  name: "AppTopBar",
  methods: {
    changeSidebarState() {
      store.state.sidebar.sidebarVisible = !store.state.sidebar.sidebarVisible;
    },
    userToggle(event) {
      this.$refs.popup.toggle(event);
    },
    logout() {
      this.$refs.popup.toggle();
      this.$store.dispatch("authenticate/logout");
      this.$router.push('/login');
    },
  },
  computed: {
    ...mapState({
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>


</style>
