<script setup>
import CreatePassword from "./components/CreatePassword.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUpPageVue from "./components/SignUpPage.vue";
</script>

<template>
  <div class="container">
    <div class="left">
      <img src="./assets/testLogo.svg" />
    </div>

    <div class="right">
      <!-- <LoginPage /> -->
      <!-- <SignUpPageVue /> -->
      <CreatePassword />
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.left {
  width: 100%;
}
.left img {
  width: 100%;
}

.imageWrapper {
  width: 2rem;
}
.imageWrapper img {
  width: 21rem;
}
.right {
  width: 400px;
}
</style>
