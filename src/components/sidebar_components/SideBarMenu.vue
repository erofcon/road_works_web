<template>
  <div class="flex h-full flex-column">
    <div class="overflow-y-auto">
      <div class="h-4rem flex align-items-center ml-4 text-black-alpha-40">
        <router-link to="/" class="cursor-pointer pt-3 mb-3 text-gray-900 flex">
          <img src="src/assets/road.png" alt="#" width="35">
          <span class="pt-2 pl-2">АСМДП</span>
        </router-link>
      </div>
      <Menu :model="items"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SideBarMenu",
  data() {
    return {
      items: [
        {
          label: 'Создать',
          visible: false,
          items: [
            {
              label: 'Создать задачу',
              icon: 'pi pi-plus',
              to: '/create_task'
            },
            {
              label: 'Запуск на детектирование',
              icon: 'pi pi-video',
              to: '/run_detection',
            },
          ],
        },
        {
          separator: true
        },
        {
          label: 'Результат детектирования',
          visible: false,
          icon: 'pi pi-truck',
          to: '/detection_result',
        },
        {
          label: 'Список задач',
          icon: 'pi pi-list',
          to: '/task_list/all_tasks',
        },
        {
          label: 'Карта',
          icon: 'pi pi-map-marker',
          to: '/map'
        },
        {
          label: 'Отчет',
          icon: 'pi pi-chart-line',
        },
      ],
    }
  },
  methods: {
    userRouts() {
      if (this.currentUser != null) {
        if (this.currentUser.user.is_creator) this.items[0].visible = true;
        if (this.currentUser.user.is_creator) this.items[2].visible = true;
      }
    },
  },
  mounted() {
    this.userRouts();
  },
  computed: {
    ...mapState({
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>

:deep(.p-menu) {
  margin: 0 15px 0 10px;
  width: auto;
  border: none;
}

:deep(.p-menu .p-menuitem > .p-menuitem-content) {
  padding: 5px;
}

:deep(.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link) {

}

:deep(.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon) {
  font-size: 20px;
  padding-right: 10px;
  color: #676666;
}

:deep(.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text) {
  font-weight: 500 !important;
  color: #676666;
}

:deep(.p-menu .p-submenu-header) {
  color: #495057;
  text-transform: uppercase;
}

</style>
