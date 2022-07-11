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
            <div class="group">
                <input_custom type="text" icon="search" placeholder="Search product"></input_custom>
                <div class="group__button">
                    <button
                        class="btn btn--text-bold btn--radius-none btn--size-big btn--white text--gray btn--text-normal">
                        Status
                        <img src="../../../assets/image/arrow_down.svg" alt="">
                    </button>
                    <button
                        class="btn btn--text-bold btn--radius-none btn--size-big btn--white text--gray btn--text-normal">
                        Quantity
                        <img src="../../../assets/image/arrow_down.svg" alt="">
                    </button>
                    <button
                        class="btn btn--text-bold btn--radius-none btn--size-big btn--white text--gray btn--text-normal">
                        Shipping
                        <img src="../../../assets/image/arrow_down.svg" alt="">
                    </button>
                    <button
                        class="btn btn--text-bold btn--radius-none btn--size-big btn--white text--gray btn--text-normal">
                        Profilt
                        <img src="../../../assets/image/arrow_down.svg" alt="">
                    </button>
                    <button
                        class="btn btn--text-bold btn--radius-none btn--size-big btn--white text--gray btn--text-normal">
                        Ready to push
                        <img src="../../../assets/image/arrow_down.svg" alt="">
                    </button>
                </div>
                <button class="btn btn--text-bold btn--size-big btn--white text--gray btn--text-normal">
                    <img src="../../../assets/image/sort.svg" alt="">
                    Sort
                </button>
            </div>
            <table_custom>
                <template slot="table-header">
                    <div class="table__header--item width--33">
                        <input type="checkbox">
                        Product
                    </div>
                    <div class="table__header--item width--8">
                        <img src="../../../assets/image/shopify_no_bg.png" alt="Shopify">
                        Status
                    </div>
                    <div class="table__header--item width--13">
                        Quantity
                    </div>
                    <div class="table__header--item width--8">
                        Options
                    </div>
                    <div class="table__header--item width--13">
                        Profile
                    </div>
                    <div class="table__header--item width--10">
                        Shipping
                    </div>
                    <div class="table__header--item width--15">
                        Actions
                    </div>
                </template>
                <template slot="table-body">
                    <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    Imwete Anti Blue Light Computer...
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                     <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    2 PCs Set Tiger Eye Stone Classic 
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                     <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    Growth Hacker Half Sleeves Wome...
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                     <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    Imwete Anti Blue Light Computer...
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                     <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    Imwete Anti Blue Light Computer...
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                     <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    Imwete Anti Blue Light Computer...
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                     <div class="table__row">
                        <div class="table__body--item text--small width--33">
                            <input type="checkbox">
                            <img src="../../../assets/image/pic1.png">
                            <div class="table__content">
                                <span>
                                    Imwete Anti Blue Light Computer...
                                </span>
                                <span class="text--smallest text--gray">
                                    Shopify ID: 343972834378
                                </span>
                            </div>
                        </div>
                        <div class="table__body--item width--8">
                            <img src="../../../assets/image/circlesmall.svg" alt="">
                            <span class="text--success">
                                Active
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <p>
                                <b>2816</b> in stock for <b>3</b> variants
                            </p>
                        </div>
                        <div class="table__body--item width--8">
                            <span class="text--gray">
                                2
                            </span>
                        </div>
                        <div class="table__body--item width--13">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Global selling
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--10">
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                Shipping 1
                                <img src="../../../assets/image/arrow_down.svg" alt="">
                            </button>
                        </div>
                        <div class="table__body--item width--15">
                            <button
                                class="btn btn--white btn--size-small btn--text-normal btn--border-primary text--primary">
                                Push to Etsy
                            </button>
                            <button class="btn btn--white btn--size-small btn--text-normal">
                                <img src="../../../assets/image/more2.svg" alt="">
                            </button>
                        </div>
                    </div>
                </template>
            </table_custom>
        </div>
    </div>
</template>

<script>
import InputCustomVue from '@/components/InputCustom.vue'
import MenuVue from '@/components/Menu.vue'
import ItemMenuVue from '@/components/ItemMenu.vue'
import TableCustomVue from '@/components/TableCustom.vue'

export default {
    name: 'product',
    components: {
        input_custom: InputCustomVue,
        menu_custom: MenuVue,
        menu_item: ItemMenuVue,
        table_custom: TableCustomVue,
    }
}
</script>

<style lang="scss" scoped>
</style>