<template>
  <div class="row rounded elevation-2 border border-dark bg-dark bg-gradient upgradeCard">
    <div class="col-3 text-center g-0 h-100">
      <img :src="boost.img" :alt="boost.name" height="60" width="60">
    </div>
    <div class="col-6 d-flex flex-column h-100">
      <span class="fs-5">
        {{ boost.name }}
      </span>
      <span>
        <i>
          {{ boost.comment }}
        </i>
      </span>
      <span>
        {{ boost.description }}
      </span>
    </div>
    <div class="col-3 g-0 d-flex align-items-center justify-content-center h-100">
      <button class="btn purchase-btn bg-gradient">
        <span>
          Activate
        </span>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    boost: {type: Object, required: true}
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