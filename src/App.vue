<template>
  <main class="bg-dark">
    <router-view />
  </main>
</template>

<script>

export default {
  setup() {
    return {
    }
  },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

</style>
