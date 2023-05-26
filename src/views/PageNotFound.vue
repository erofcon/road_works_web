<template>
  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center">
      <span class="text-pink-500 font-bold text-2xl inline-block px-3">404</span>
    </div>
    <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Страница не найдено!</div>
    <p class="text-700 text-3xl mt-0 mb-6 text-center">Извените, мы не можем найти эту страницу</p>
    <div class="text-center">
      <Button @click="$router.push('/')" class="p-button-sm" icon="pi pi-arrow-left" label="назад домой"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

</style>
