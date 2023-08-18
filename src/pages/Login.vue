<template>
  <div class="surface-ground h-screen">
    <div class="flex justify-content-center pt-8">
      <Card class="p-0 m-0 border-round-3xl">
        <template #title>
          <div class="flex justify-content-center mb-3 ">
            <img src="@/assets/road.png" alt="#" width="45">
          </div>
          <div class="text-center">
            <h4 class="mt-4 text-xl">Добро пожаловать! 👋</h4>
            <p class="text-sm text-gray-600">пожалуйста, пройдите процесс авторизации</p>
          </div>
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
            <div v-if="loginError" class="text-center">
              <p class="text-sm text-red-800">ошибка авторизации</p>
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
      loginError: false,
    }
  },
  methods: {
    login() {
      this.loginError = false;
      this.loading = true;
      const data = {username: this.username, password: this.password}

      this.$store.dispatch('authenticate/login', data).then(() => {
        this.$router.push("/");
      }, () => {
        this.loginError = true;
      }).finally(() => {
        this.loading = false;
      })

    }
  },
}
</script>

<style scoped>

</style>
