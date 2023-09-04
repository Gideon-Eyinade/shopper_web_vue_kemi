<template>
  <div class="container">
    <div class="img-container">
      <img src="" alt="" />
    </div>
    <div class="login">
      <div class="login-title">
        <p>Log in to Shopper</p>
      </div>
      <div class="login-info">
        <p>Please enter your login information</p>
      </div>
      <form action="#">
        <label for="email">Email</label><br />
        <input type="email" name="email" value="" class="inputDetails" /><br />
        <label for="password">Password</label><br />
        <div class="password-container">
          <input
            type="password"
            id="password"
            class="inputDetails"
            name="password"
            value=""
          />
          <img
            src="../assets/toggle.svg"
            @click="togglePassword()"
            class="toggle-eye"
          />
        </div>

        <div class="forgotPassword">
          <router-link to="/SignUp">Forgot your password?</router-link>
        </div>
        <button class="login-btn">Login with email</button>
        <p class="noAccount">
          You do not have an account?
          <span>
            <router-link to="/signUp">Create an account</router-link></span
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    togglePassword() {
      let password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
}
.login-title {
  border-radius: 38.571px;
  border: 0.643px solid #b0b0b0;
  padding: 10px 23px;
  text-align: center;
  width: 14rem;
  margin-bottom: 1rem;
  margin: 0 auto;
}
.login-title p {
  color: #0c0c0c;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.13px;
}
.login-info {
  margin-bottom: 2.5rem;
}
.login-info p {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding-top: 1rem;
}
label {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
}
input {
  border-radius: 12px;
  border: 1px solid #a3a3a3;
  margin-bottom: 0.75rem;
  padding: 1rem;
  width: 15rem;
}
.inputDetails {
  border-radius: 12px;
  border: 1px solid #a3a3a3;
  margin-bottom: 0.75rem;
  padding: 1rem;
  width: 350px;
}
.forgotPassword {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}
.password-container {
  width: 350px;
  position: relative;
}
.password-container input[type="password"],
.password-container input[type="text"] {
  width: 100%;
  box-sizing: border-box;
}
.toggle-eye {
  position: absolute;
  top: 28%;
  right: 4%;
  cursor: pointer;
  color: lightgray;
}
.login-btn {
  border-radius: 12px;
  background: #000;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 0.5rem 4rem;
  margin-top: 1rem;
  width: 350px;
  cursor: pointer;
  margin: 1rem auto 0.5rem auto;
}
.noAccount {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
p span {
  color: #5c73db !important;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
}
</style>
