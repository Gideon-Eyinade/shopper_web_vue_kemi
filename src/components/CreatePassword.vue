<template>
  <div class="container">
    <div class="img-container">
      <img src="" alt="" />
    </div>
    <div class="login">
      <div class="login-title">
        <p>Create Password</p>
      </div>
      <div class="login-info">
        <p>Please enter your login information</p>
      </div>
      <form action="#">
        <label for="createPassword">Create Password</label><br />
        <div class="password-container">
          <input
            type="password"
            id="myInput"
            class="inputDetails"
            name="createPassword"
            value=""
          />
          <img
            src="../assets/toggle.svg"
            @click="togglePassword()"
            class="toggle-eye"
          />
        </div>

        <label for="confirm Password"> Confirm Password</label><br />
        <div class="password-container">
          <input
            type="password"
            id="confirmPassord"
            name="confirm Password"
            value=""
            class="inputDetails"
          />
          <img
            src="../assets/toggle.svg"
            @click="toggleConfirmPassword()"
            class="toggle-eye"
          />
        </div>
        <button class="login-btn">Create account</button>
        <p class="noAccount">
          Already have an account?
          <span> <a href="#">Login</a></span>
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
      let password = document.getElementById("myInput");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    },
    toggleConfirmPassword() {
      let password = document.getElementById("confirmPassord");
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
  width: 90%;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
}
.shopper-role {
  display: flex;
  align-items: center;
  justify-content: center;
}
.shopper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reseller {
  margin-right: 1rem;
}
.shopper-title {
  color: #19191b;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  padding-left: 0.3rem;
}
.subscriber {
  color: #9fa6b2;
}
</style>
