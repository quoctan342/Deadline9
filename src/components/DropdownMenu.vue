<template>
    <ul v-show="this.show" class="dropdown position--absolute">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: "Dropdown",
    props: ['show']
}
</script>

<style lang="scss" scoped>

</style>