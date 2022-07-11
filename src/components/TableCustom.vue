<template>
  <div class="table">
    <div class="table__header">
      <slot name="table-header"></slot>
    </div>
    <div class="table__body">
      <slot name="table-body"></slot>
    </div>
    <div class="table__footer">
      <slot name="table-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>