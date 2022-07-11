<template>
  <div class="app_auth">
    <div class="logo"><img src="../assets/image/Logo.png" alt="Logo"></div>
    <div class="app_auth_content">
        <router-view></router-view>
        <img src="../assets/image/art_work.png" alt="Artwork">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app_auth {
    background-image: url(../assets/image/bg.png);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 482px 100%;
    background-color: #F6F8FF;
    position: fixed;
    height: 100vh;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 100px;
}
.app_auth_content {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    gap: 205px; 
    align-items: flex-start;
}
</style>
