<template>
  <div class="surface-ground h-screen">
    <div class="flex justify-content-center p-8">
      <Card class="p-0 m-0">
        <template #title>
          <div class="flex justify-content-center mb-3 ">
            <img src="/src/assets/road.png" alt="#" width="45">
          </div>
          <span>Дорожные работы</span>
          <h4 class="mt-4 text-base">Добро пожаловать! 👋</h4>
          <p class="text-base">Пожалуйста, пройдите процесс авторизации</p>
        </template>

        <template #content>
          <form @submit.prevent="login">
            <div class="field">
              <label for="username" class="block font-medium">логин</label>
              <InputText v-model="username" id="username" class="w-full xl:w-23rem" required/>
            </div>
            <div class="field">
              <label for="password" class="block font-medium">пароль</label>
              <InputText v-model="password" :feedback="false" id="password" class="w-full xl:w-23rem" type="password"
                         required/>
            </div>
            <div class="field">
              <Button label="войти" icon="pi pi-user-plus" type="submit" class="w-full p-button-sm mt-4"/>
            </div>
          </form>
        </template>
      </Card>
    </div>
  </div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      loading: false,
    }
  },
  methods: {
    login() {
      this.loading = true;
      const data = {username: this.username, password: this.password}

      this.$store.dispatch('authenticate/login', data).then(value => {
        this.$router.push("/");
      }).finally(() => {
        this.loading = false;
      })
    }
  },
}
</script>

<style scoped>

</style>
