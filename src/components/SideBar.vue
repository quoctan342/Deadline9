<template>
    <div class="sidebar" v-show="this.show">
        <div class="sidebar__body">
            <img src="../assets/image/Logo.png" class="logo" alt="Logo">
            <menu_custom>
                <menu_item text="Dashboard" icon="drive" linkto="/" />
                <menu_item text="Products" icon="store" linkto="/product" />
                <menu_item text="Stores" icon="bag" linkto="/store" />
                <menu_item text="Settings" icon="setting" linkto="/settings" />
            </menu_custom>
        </div>
        <div class="sidebar__footer full-width">
            <menu_custom direction="row">
                <menu_item icon="headphone" width_icon="20px" height_icon="17px" linkto="/music" />
                <menu_item icon="mess" width_icon="20px" height_icon="17px" linkto="/message" />
                <menu_item icon="more" width_icon="20px" height_icon="17px" linkto="/more" />
            </menu_custom>
        </div>
    </div>
</template>

<script>
import MenuVue from '@/components/Menu.vue'
import ItemMenuVue
    from '@/components/ItemMenu.vue'

export default {
    props: ['show'],
    components: {
        menu_custom: MenuVue,
        menu_item: ItemMenuVue,
    },
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 230px;
  width: 230px;
  height: 100%;
  background: #F7F8FA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #E2E2E2;

  &__footer {
    position: relative;
    padding: 6px 10px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      border-radius: 0px 6px 6px 0px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 1px;
      background: #F3F3F3;
    }
  }
}
.logo {
  width: 125px;
  height: 30px;
  margin: 13px 15px 30px 13px;
}
</style>