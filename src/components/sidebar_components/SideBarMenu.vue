<template>
  <div class="flex h-full flex-column">
    <div class="overflow-y-auto">
      <div class="h-4rem flex align-items-center ml-4 text-black-alpha-40">
        <router-link to="/" class="cursor-pointer text-2xl text-gray-900">
          <span>АСМДП</span>
        </router-link>
      </div>
      <Menu :model="items"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarMenu",
  data() {
    return {
      items: [
        {
          label: 'Создать',
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
  }
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

/*.p-menu .p-submenu-header {*/
/*  margin: 0;*/
/*  padding: 0.75rem 1rem;*/
/*  color: #212529;*/
/*  background: #ffffff;*/
/*  font-weight: 600;*/
/*  border-top-right-radius: 0;*/
/*  border-top-left-radius: 0;*/
/*}*/
</style>
