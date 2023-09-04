<template>
  <div class="">
    <div class="left">
      <div class="logo imageWrapper">
        <img src="./assets/testLogo.svg" class="toggle-eye" />
      </div>
    </div>
    <div class="right">
      <LoginPage />
      <!-- <SignUpPageVue />
      <CreatePassword /> -->
    </div>
  </div>
</template>

<script>
import LoginPage from "./LoginPage.vue";
export default {
  //   name: App,
  components: LoginPage,
  SignUpPageVue,
  CreatePassword,
};
</script>

<style></style>
