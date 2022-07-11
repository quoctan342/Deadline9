<template>
    <div class="content">
        <div class="content__header">
            <h1 class="content__title">Store</h1>
            <button class="btn btn--size-big btn--primary btn--text-normal">
                <img src="../../../assets/image/plus.svg" alt="Add">
                Add new store
            </button>
        </div>
        <div class="content__body">
            <table_custom>
                <template slot="table-header">
                    <div class="table__header--item width--35">
                        Store name
                    </div>
                    <div class="table__header--item width--15">
                        Status
                    </div>
                    <div class="table__header--item width--35">
                        Products
                    </div>
                    <div class="table__header--item width--15">
                    </div>
                </template>
                <template slot="table-body">
                    <div class="table__row">
                        <div class="table__body--item text--small width--35">
                            <img src="../../../assets/image/store1.png">
                            <div class="table__content">
                                <span>
                                    Baobashop
                                </span>
                                <span class="text--smallest text--gray">
                                    phuongnnguyen@gmail.com
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--15">
                            <span class="tag tag--success">
                                Live
                            </span>
                        </div>
                        <div class="table__body--item width--35">
                            560
                        </div>
                        <div class="table__body--item width--15 flex--row-reverse">
                            <button class="btn btn--white btn--size-small btn--text-normal btn--padding-left-right-21">
                                Detail
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" height="16px" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="table__row">
                        <div class="table__body--item text--small width--35">
                            <img src="../../../assets/image/store2.png">
                            <div class="table__content">
                                <span>
                                    Coffee Pet shop
                                </span>
                                <span class="text--smallest text--gray">
                                    phuongnnguyen@gmail.com
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--15">
                            <span class="tag tag--success">
                                Live
                            </span>
                        </div>
                        <div class="table__body--item width--35">
                            560
                        </div>
                        <div class="table__body--item width--15 flex--row-reverse">
                            <button class="btn btn--white btn--size-small btn--text-normal btn--padding-left-right-21">
                                Detail
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" height="16px" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="table__row">
                        <div class="table__body--item text--small width--35">
                            <img src="../../../assets/image/store3.png">
                            <div class="table__content">
                                <span>
                                    X-Deal fashion
                                </span>
                                <span class="text--smallest text--gray">
                                    phuongnnguyen@gmail.com
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--15">
                            <span class="tag tag--success">
                                Live
                            </span>
                        </div>
                        <div class="table__body--item width--35">
                            560
                        </div>
                        <div class="table__body--item width--15 flex--row-reverse">
                            <button class="btn btn--white btn--size-small btn--text-normal btn--padding-left-right-21">
                                Detail
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" height="16px" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="table__row">
                        <div class="table__body--item text--small width--35">
                            <img src="../../../assets/image/store4.png">
                            <div class="table__content">
                                <span>
                                    D.Mix Store
                                </span>
                                <span class="text--smallest text--gray">
                                    phuongnnguyen@gmail.com
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--15">
                            <span class="tag tag--danger">
                                Disconnected
                            </span>
                        </div>
                        <div class="table__body--item width--35">
                            560
                        </div>
                        <div class="table__body--item width--15 flex--row-reverse">
                            <button class="btn btn--white btn--size-small btn--text-normal btn--padding-left-right-21">
                                Detail
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" height="16px" alt="">
                            </button>
                        </div>
                    </div>
                </template>
            </table_custom>
        </div>
    </div>
</template>

<script>
import TableCustomVue from '@/components/TableCustom.vue'

export default {
    name: 'store',
    components: {
        table_custom: TableCustomVue,
    }

}
</script>

<style lang="scss" scoped>
</style>