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
    </ul>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "AppTopBar",
  methods: {
    changeSidebarState() {
      store.state.sidebar.sidebarVisible = !store.state.sidebar.sidebarVisible;
    }
  }
}
</script>

<style scoped>

</style>
