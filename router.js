import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./src/components/LoginPage.vue";
import SignUpPage from "./src/components/SignUpPage.vue";
import CreatePassword from "./src/components/CreatePassword.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUpPage,
  },
  {
    path: "/createPassword",
    name: "CreatePassword",
    component: CreatePassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
