<template>
  <div class="grid">
    <div class="p-fluid col p-0">
            <span class="p-input-icon-right p-fluid">
              <i class="pi pi-search"/>
              <InputText id="inputtext-right" class="p-inputtext-s p-fluid" placeholder="Поиск" type="text"/>
            </span>
    </div>
    <div class="col p-fluid col p-0">
      <Dropdown placeholder="период" class="ml-4"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskListHead"
}
</script>

<style scoped>

</style>
