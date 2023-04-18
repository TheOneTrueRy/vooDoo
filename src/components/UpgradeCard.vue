<template>
  <div class="row rounded elevation-2 border border-dark bg-dark bg-gradient upgradeCard">
    <div class="col-3 d-flex align-items-center justify-content-center g-0 h-100">
      <img :src="upgrade.img" :alt="upgrade.name" height="80" width="80">
    </div>
    <div class="col-6 d-flex flex-column h-100">
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
    <div class="col-3 g-0 d-flex align-items-center justify-content-center h-100">
      <button class="btn purchase-btn bg-gradient">
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
  .upgradeCard{
    height: 90px;
  }

  .purchase-btn{
    background-color: #8285c5;
    font-weight: bold;
  }

  .purchase-btn:hover{
    background-color: #8183d8;
  }
</style>