<template>
  <main class="bg-dark">
    <router-view />
  </main>
</template>

<script>
import { onMounted } from "vue";
import { loadService } from "./services/LoadService.js";
import Pop from "./utils/Pop.js";
import { logger } from "./utils/Logger.js";
import { AppState } from "./AppState.js";


export default {
  setup() {
    function loadEverything(){
        try {
          loadService.loadEverything()
        } catch (error) {
          Pop.error(error.message, 'Testing Load')
        }
      }
    onMounted(() => {
      loadEverything()
      logger.log(AppState.dollKits)
    })
    return {
    }
  },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

// :root{
//   --main-height: calc(100vh - 32px - 64px);
// }

</style>
