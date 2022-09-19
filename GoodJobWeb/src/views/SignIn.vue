<template>
  <div class="row justify-content-md-center mt-5">
    <div class="container" id="container">
      <div class="form_container sign_up_container">
        <form>
          <h1>Create Account</h1>

          <input id="signUpEmail" type="email" placeholder="Email" />
          <input id="signUpPassword" type="password" placeholder="Password" />
          <input
            id="signUpCPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <button type="button" @click="SignUp">Sign Up</button>
        </form>
      </div>
      <div class="form_container sign_in_container">
        <form>
          <h1>Sign in</h1>
          <input id="signInEmail" type="email" placeholder="Email" />
          <input id="signInPassword" type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="button" @click="SignIn">Sign In</button>
        </form>
      </div>
      <div class="overlay_container">
        <div class="overlay">
          <div class="overlay_panel overlay_left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button class="ghost" id="signIn">Sign In</button>
          </div>
          <div class="overlay_panel overlay_right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const SignUp = async () => {
  var paremeters = GetAllInputValue();
  if ((await ValidateSignUp(paremeters)) == true) {
    var { signUpEmail, signUpPassword } = paremeters;

    var obj = {
      email: signUpEmail,
      passowrd: signUpPassword,
    };

    console.log(obj);
    // var result = await httpPost("http://localhost:5173/public/Register", obj);
  }
};

const SignIn = async () => {
  var paremeters = GetAllInputValue();

  if ((await ValidateSignIn(paremeters)) == true) {
    // let url = location.protocol + '//' + location.host;
    // var apiUrl = url + "/public/Login";
    var { signInEmail, signInPassword } = paremeters;

    var obj = {
      email: signInEmail,
      password: signInPassword,
    };

    console.log(obj);
    // var result = await httpPost("http://localhost:5173/public/Login", obj);
  }
};

async function ValidateSignIn(paremeters) {
  var { signInEmail, signInPassword } = paremeters;

  if (_.isEmpty(signInEmail)) {
    swalTip("Warning", "Email is Required");
    return;
  }

  if (!ValidateEmail(signInEmail)) {
    swalTip("Warning", "Email Format Error");
    return;
  }

  if (_.isEmpty(signInPassword)) {
    swalTip("Warning", "Password is Required");
    return;
  }

  if (!ValidateLength(signInPassword, 6, 8)) {
    swalTip("Warning", "Password Need 6 ~ 8 characters");
    return;
  }

  return true;
}

async function ValidateSignUp(paremeters) {
  var { signUpEmail, signUpPassword, signUpCPassword } = paremeters;

  if (_.isEmpty(signUpEmail)) {
    swalTip("Warning", "Email is Required");
    return;
  }

  if (!ValidateEmail(signUpEmail)) {
    swalTip("Warning", "Email Format Error");
    return;
  }

  if (_.isEmpty(signUpPassword)) {
    swalTip("Warning", "Password is Required");
    return;
  }

  if (!ValidateLength(signUpPassword, 6, 8)) {
    swalTip("Warning", "Password Need 6 ~ 8 characters");
    return;
  }

  if (_.isEmpty(signUpCPassword)) {
    swalTip("Warning", "Confirm Password is Required");
    return;
  }

  if (!ValidatePasswordMatch(signUpPassword, signUpCPassword)) {
    swalTip("Warning", "Two Password Does Not Match");
    return;
  }

  return true;
}
</script>

<style>
h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #72c08d;
  background-color: #72c08d;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form_container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign_in_container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign_in_container {
  transform: translateX(100%);
}

.sign_up_container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign_up_container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay_container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay_container {
  transform: translateX(-100%);
}

.overlay {
  background: #72c08d;
  background: -webkit-linear-gradient(to right, #a8d8b9, #72c08d);
  background: linear-gradient(to right, #a8d8b9, #72c08d);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay_panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay_left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay_left {
  transform: translateX(0);
}

.overlay_right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay_right {
  transform: translateX(20%);
}
</style>