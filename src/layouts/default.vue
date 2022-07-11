<template>
  <div class="app">
    <side_bar :show="this.showSidebar"></side_bar>
    <div class="app__body">
      <navbar>
        <template slot="navbar-header">
          <button class="btn btn--white btn--border-none border--padding-none" @click="toggleSidebar">
            <img class="navbar__item" src="../assets/image/bars.svg" alt="">
          </button>
        </template>
        <template slot="navbar-body">
          <div class="navbar__item navbar__item--border-left-right position--relative">
            <button class="btn btn--white btn--border-none btn--padding-none" @click="toggleDropdown">
              <img src="../assets/image/Avatar.png" alt="">
              {{ this.infoUser.name }}
              <img src="../assets/image/chevron-down.svg" alt="">
            </button>
            <dropdownmenu :show="this.showDropdown">
              <li class="dropdown__item">Settings</li>
              <li @click="handleLogout" class="dropdown__item">Logout</li>
            </dropdownmenu>
          </div>
          <div class="navbar__item">
            <img src="../assets/image/Avatar2.png" alt="">
          </div>
        </template>
      </navbar>
      <div class="app__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SideBarVue from '@/components/SideBar.vue'
import Navbar from '@/components/Navbar.vue'
import DropdownMenuVue from '@/components/DropdownMenu.vue';

export default {
  name: 'Dashboard',
  components: {
    side_bar: SideBarVue,
    navbar: Navbar,
    dropdownmenu: DropdownMenuVue,
  },
  data() {
    return {
      showSidebar: true,
      showDropdown: false,
    }
  },
  computed: {
    ...mapGetters({
      infoUser: 'auth/getUser',
    })
  },
  methods:
  {
    ...mapActions({
      handleLogout: 'auth/logout'
    }),
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
}
</script>

<style lang="scss" scoped>
.app {
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;

  &__body {
    width: 100%;
    flex: 1;
  }

  &__content {
    background: #F7F8FA;
    height: 100%;
    padding: 30px 55px 0px 55px;
  }
}
</style>
