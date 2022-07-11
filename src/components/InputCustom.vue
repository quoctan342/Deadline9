<template>
    <div class="inputCustom flex--main" :class="{ 'inputCustom--no-background' : this.background }">
        <img v-if="this.icon" :src="require(`@/assets/image/${this.icon}.svg`)" alt="icon" class="input__icon">
        <input :type="this.TypeInput" :placeholder="this.placeholder" class="input__value full-width" v-model="value">
        <button v-if="this.type == 'password'" v-show="this.ShowPassword" @click="toggleShowPassword"
            class="btn btn--white btn--text-small btn--text-bold btn--border-none btn--padding-none text--gray">HIDE</button>
        <button v-if="this.type == 'password'" v-show="!this.ShowPassword" @click="toggleShowPassword"
            class="btn btn--white btn--text-small btn--text-bold btn--border-none btn--padding-none text--gray">SHOW</button>
    </div>
</template>

<script>
export default {
    name: 'input-custom',
    props: ['placeholder', 'icon', 'type', 'background'],
    data() {
        return {
            ShowPassword: false,
            TypeInput: '',
            value: '',
        }
    },
    watch: {
        value() {
            this.$emit('input', this.value)
        }
    },
    methods: {
        toggleShowPassword() {
            if (this.type == 'password') {
                if (this.TypeInput == 'password') {
                    this.TypeInput = 'text';
                } else {
                    this.TypeInput = 'password';
                }
                this.ShowPassword = !this.ShowPassword;
            }
        }
    },
    created() {
        this.TypeInput = this.type;
    }
}
</script>

<style lang="scss" scoped>
.inputCustom {
    width: 100%;
    padding: 10px 13px;
    background: #ffffff;
    border: 1px solid #EBEBF0;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    &--no-background {
        background: none;
        border: none;
        padding: 0;
        width: auto;
    }
}
</style>