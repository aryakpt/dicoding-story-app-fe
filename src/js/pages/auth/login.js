import authApi from "../../api/auth.api";
import apiConfig from "../../config/apiConfig";
import { storage } from "../../utils/storage";
import CheckUserAuth from "../../utils/checkUserAuth";
const Login = {
  init() {
    CheckUserAuth.checkLoginState();
    const loginForm = document.querySelector("#form-login");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      loginForm.classList.add("was-validated");
      this._handleSubmit();
    });
  },
  async _handleSubmit() {
    const payload = this._getPayload();
    const isValidated = this._validatePayload(payload);
    if (isValidated) {
      const spinner = document.querySelector("spinner-component");
      spinner.style.display = "block";
      const res = await authApi.login(payload);
      spinner.style.display = "none";
      if (res.status === 200) {
        storage.set(apiConfig.TOKEN_KEY, res.data.loginResult);
        window.location.href = "/";
      } else {
        alert(res.data.message);
      }
    }
  },
  _getPayload() {
    const inputEmail = document.querySelector("#input-email");
    const inputPassword = document.querySelector("#input-password");
    return {
      email: inputEmail.value,
      password: inputPassword.value,
    };
  },
  _validatePayload(payload) {
    const payloadFiltered = Object.values(payload).filter(
      (item) => item === ""
    );
    return payloadFiltered.length === 0;
  },
};

export default Login;
