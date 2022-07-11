<template>
    <div>
        <div class="navbar">
            <div class="navbar__header">
                <slot name="navbar-header" class="navbar__header"></slot>
            </div>
            <div class="navbar__body">
                <slot name="navbar-body"></slot>
            </div>
            <slot name="navbar-footer" class="navbar__footer"></slot>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>