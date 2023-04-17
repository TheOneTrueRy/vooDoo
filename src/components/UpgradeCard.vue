<template>
  <div class="row rounded elevation-2 border border-dark bg-light">
    <div class="col-3 text-center g-0">
      <img :src="upgrade.img" :alt="upgrade.name" height="60" width="60">
    </div>
    <div class="col-6 d-flex flex-column">
      <span class="fs-5">
        {{ upgrade.name }}
      </span>
      <span>
        <i>
          {{ upgrade.comment }}
        </i>
      </span>
      <span>
        {{ upgrade.description }}
      </span>
    </div>
    <div class="col-3 text-center">
      <button class="btn btn-dark">
        <span>
          Purchase
        </span>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    upgrade: {type: Object, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>