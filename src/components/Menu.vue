<template>
    <div class="menu" :class="{ menu__row : direction == 'row' }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'menu-component',
    props: ['direction']
}
</script>

<style lang="scss" scoped>
.menu {
    list-style: none;

  &__row {
    display: flex;
    justify-content: space-between;
  }

}
</style>