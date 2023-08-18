<template>
  <div class="layout-footer">
    <img alt="Logo" src="@/assets/road.png" height="20" class="mr-2"/>
    by
    <a href="https://github.com/erofcon" class="font-medium ml-2">erofcon</a>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
    footerImage() {
      return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
    }
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  }
}
</script>
