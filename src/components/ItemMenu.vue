<template>
    <router-link class="menu__item link text--gray" :to="this.linkto">
        <img v-if="this.icon" :src="require(`@/assets/image/${this.icon}.svg`)" alt="icon" :width="this.width_icon" :height="this.height_icon">
        {{ this.text }}
    </router-link>
</template>

<script>
export default {
    name: 'item-menu',
    props: {
        text: String,
        icon: String,
        linkto: String,
        width_icon: {
            type: String,
            default: "16px",
        },
        height_icon: {
            type: String,
            default: "16px",
        },
    }
}
</script>

<style lang="scss" scoped>
.menu {
    &__item {
        display: flex;
        align-items: center;
        gap: 13px;
        padding: 10px 15px;
        font-size: 14px;

    }
}

.router-link-exact-active {
    background: #EBF1FF;
    color: #5B86E5;
    font-weight: 500;
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 0px 6px 6px 0px;
        top: 0;
        left: 0;
        width: 4px;
        height: 40px;
        background: #5B86E5;
    }
}
</style>