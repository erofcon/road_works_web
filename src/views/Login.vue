<template>
  <div class="surface-ground h-screen">
    <div class="flex justify-content-center p-8">
      <Card class="p-4">
        <template #title>
          <div class="flex justify-content-center mb-3  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="45"
                 height="45"
                 viewBox="0 0 50 50">
              <path
                  d="M42.7065 7.32384C39.2104 3.82714 34.7558 1.44571 29.9062 0.480712C25.0565 -0.484288 20.0297 0.0105324 15.4613 1.90259C10.8929 3.79464 6.98815 6.99901 4.24091 11.1103C1.49368 15.2216 0.0273438 20.0553 0.0273438 25C0.0273438 29.9447 1.49368 34.7784 4.24091 38.8897C6.98815 43.001 10.8929 46.2054 15.4613 48.0974C20.0297 49.9895 25.0565 50.4843 29.9062 49.5193C34.7558 48.5543 39.2104 46.1729 42.7065 42.6762C47.394 37.9879 50.0273 31.6296 50.0273 25C50.0273 18.3704 47.394 12.0121 42.7065 7.32384ZM6.54743 16.5397C7.80717 13.7456 9.67377 11.2673 12.0116 9.28518C14.3494 7.30303 17.0996 5.86678 20.0621 5.08098C23.0247 4.29517 26.1251 4.17955 29.138 4.7425C32.1508 5.30544 35.0003 6.53277 37.4793 8.33527C31.3429 7.75571 23.6611 10.8921 17.4339 17.1079C15.0836 19.4544 13.0924 22.1348 11.5248 25.0625C9.39252 22.5257 7.70922 19.6433 6.54743 16.5397ZM20.3315 45.5397C15.5865 44.2684 11.4503 41.347 8.66565 37.3001C5.881 33.2533 4.63038 28.3462 5.13842 23.4602C7.71788 29.0625 14.2293 34.1534 22.7748 36.4262C25.9649 37.2915 29.2666 37.6745 32.5702 37.5625C31.4474 40.6682 29.8068 43.5614 27.7179 46.1193C25.2397 46.37 22.7365 46.1659 20.3315 45.517V45.5397ZM35.8884 21.7784C35.046 18.5738 33.7365 15.5107 32.002 12.6875C35.2511 12.1091 38.5748 12.0861 41.8315 12.6193C43.2893 14.6374 44.3639 16.9062 45.002 19.3125C46.2755 24.0582 45.8148 29.1025 43.7028 33.539C41.5907 37.9755 37.9658 41.5134 33.4793 43.5171C37.0248 38.5057 38.1611 30.2897 35.8884 21.7784Z"
                  fill="#495057"/>
            </svg>
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
